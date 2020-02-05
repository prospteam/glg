<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MY_Controller {

	public function index($is_api="no"){

		if($is_api=="yes"){
			$rest_json = file_get_contents("php://input");
			$_POST = json_decode($rest_json, true);

			// echo '<pre>';
			// print_r($_POST);
			// exit;
		}


		$data['title'] = 'Log In | Global Logistics Group';
		// $rest_json = file_get_contents("php://input");
		// $_POST = json_decode($rest_json, true);
		
		if($is_api=="no"){
			$this->load->view('index', $data);
		}


		if(isset($_POST['login'])) {

			$un = $_POST['username'];
			$pw = $_POST['password'];
	// 	 $un = $this->input->post('username');
	//   $pw = $this->input->post('password');

			$this->db->select('*');
			$this->db->where('username',$un);
			$result = $this->db->get('glg_users')->row();

			if (!empty($result)){
				if($result->user_type != "admin"){
					if ($result->status == "pending" ) {
						
						if($is_api=="yes"){
							$api_response['status'] = "error";
							$api_response['message'] = "Your account is not yet activated.";
						}else{
							$this->session->set_userdata('swal', 'Your account is not yet activated.');
							redirect($this->uri->uri_string());
						}
						
					}else if($result->status == "inactive"){
//XD					
					if($is_api == "yes"){
						$api_response['status'] = "error";
						$api_response['message'] = "Account not active. Please contact administrator";
					}else{
						$this->session->set_userdata('swal', 'Account not active. Please contact administrator.');
						redirect($this->uri->uri_string());
					}

					}
				}
				if (password_verify($pw, $result->password)) {
			  		// $this->session->set_userdata('user_session',$result);
					$id = $result->user_id;

					$userdata = $this->db->
					select('*')->
					where('fk_userid', $id)->
					from('glg_userdata')->
					join('glg_users', 'glg_users.user_id = glg_userdata.fk_userid')->
					get()->row();

					if($userdata->user_type == 'shipper'){
						$this->session->set_userdata('shipper_status', $userdata->user_type);
					}else if($userdata->user_type == 'carrier') {
						$this->session->set_userdata('carrier_status', $userdata->user_type);
					}

//XD				
					if($is_api == "yes"){
						$api_response['status'] = "success";
						$api_response['message'] = "Success!";
					}else{
						$this->session->set_userdata('user_session',$userdata);
						   redirect('Test');
					}
		      } else {
				//XD
					if($is_api == "yes"){
						$api_response['status'] = "error";
						$api_response['message'] = "Invalid username or password";

					}else{
						$this->session->set_userdata('swal', 'Invalid username or password.');
						redirect($this->uri->uri_string());
					}
		      }
			} else{
				//XD
				if($is_api == "yes"){
					$api_response['status'] = "error";
					$api_response['message'] = "Invalid username or password";
				}else{
					$this->session->set_userdata('swal', 'Invalid username or password.');
					redirect($this->uri->uri_string());
				}
				
			}

		}
		if($is_api=="yes"){
			echo json_encode($api_response);
		}
	}

	public function register ($is_api="no"){

		if($is_api=="yes"){
			$rest_json = file_get_contents("php://input");
			$_POST = json_decode($rest_json, true);

			// echo "<pre>";
			// print_r($_POST);
			// echo json_encode(array(
			// 	'status'=>'successs'
			// ));
			// exit();
		}

		if(isset($_POST['register'])) {

			$check_un = $_POST['username'];
			$check_email = $_POST['emailadd'];

			$result_un = $this->db->
			select('*')->
			from('glg_users')->
			where('username', $check_un)->
			get()->
			result();

			$result_email = $this->db->
			select('*')->
			from('glg_users')->
			where('email', $check_email)->
			get()->
			result();

			if($result_un){
				if($is_api=="yes"){
					$api_response['status'] = "error";
					$api_response['message'] = "Username taken. Please input a new username.";
				}else{
					$this->session->set_userdata('swal', 'Username taken. Please input a new username.');
				}
			}else if($result_email){
				
				if($is_api=="yes"){
					$api_response['status'] = "error";
					$api_response['message'] = "Email taken. Please input a new email ";
				}else{
					$this->session->set_userdata('swal', 'Email taken. Please input a new email.');
				}
			}else {
				$pw = password_hash($_POST['password'], PASSWORD_DEFAULT);

				$result = $this->db->
				set('username', $_POST['username'])->
				set('password', $pw)->
				set('other_password', $_POST['password'])->
				set('user_type', $_POST['usertype'])->
				set('email', $_POST['emailadd'])->
				set('status', 'pending')->
				insert('glg_users');
				$uid = $this->db->insert_id();
				$message = "<h1>A new user has registered the website:</h1>";
				$message .= "<p>First name: ".$_POST['fname']."</p>";
				$message .= "<p>Last name: ".$_POST['lname']."</p>";
				$message .= "<p>Address: ".$_POST['address']."</p>";
				$message .= "<p>Contact number: ".$_POST['cnumber']."</p>";
				$message .= "<p>Email address: ".$_POST['emailadd']."</p>";
				$message .= "<p>User type: ".$_POST['usertype']."</p>";
				$message .= "<h3>For more information, please visit the website: <a href='https://glgfreight.com/loadboard'>Global Logistics Group</a></h3>";
				$this->sendmail("prospteam@gmail.com", null, 'New Account Registered', $message, true);
				$this->send_notification('','New Account','New user has been registered. ',1);

				// private function send_notification($to_id='1',$title='',$desc='',$notif_type='')
				if($_POST['usertype'] == 'carrier'){
					$result2 = $this->db->
					set('fk_userid', $uid)->
					set('first_name', $_POST['fname'])->
					set('last_name', $_POST['lname'])->
					set('address', $_POST['address'])->
					set('contact_number', $_POST['cnumber'])->
					set('mc_number', $_POST['mc_number'])->
					set('tax_id', $_POST['tax_id'])->
					set('company', $_POST['company'])->
					set('profile_picture', 'user1.png')->
					insert('glg_userdata');
				}else{
					$result2 = $this->db->
					set('fk_userid', $uid)->
					set('first_name', $_POST['fname'])->
					set('last_name', $_POST['lname'])->
					set('address', $_POST['address'])->
					set('contact_number', $_POST['cnumber'])->
					set('profile_picture', 'user1.png')->
					insert('glg_userdata');
				}



				if($is_api=="yes"){
					$api_response['status'] = "success";
					$api_response['message'] = "Registration Successful. Please wait for the approval by the Administrator. Thank you.";
				}else{
					$this->session->set_userdata('swal', 'Please wait for the approval by the Administrator. Thank you.');
					redirect('login');
				}
			}
		}

		if($is_api=="yes"){
			echo json_encode($api_response);
		}else{
			$this->load->view('register');
		}
	}

	public function forgot_password(){
		if(isset($_POST['email'])){
				$pwdb = $this->db->
				select('*')->
				from('glg_users')->
				where('email', $_POST['email'])->
				get()->
				result_array();

				if(!empty($pwdb)){
					$id = $pwdb[0]['user_id'];
					$temp = $pwdb['0']['username'][0] . $pwdb['0']['user_type'][0];
					$token = uniqid($temp);

					$this->db->
					set('token', $token)->
					where('user_id', $id)->
					update('glg_users');

					$test = md5(rand(1,13));
					$message = "<h2>Please visit the link to change your password:</h2>";
					$message .= "<a href=\"".base_url()."login/change_password?ms=".$id."&te=".$token."\">Change Password</a>";
					$this->sendmail($_POST['email'], null, 'Password Recovery', $message, true);
					$this->session->set_userdata('swal', 'Check your email now to retrieve your password.');
				} else{
					$this->session->set_userdata('swal', 'Sorry but there is no account that exists with that email.');
				}
				redirect('login');
			}
		$this->load->view('forgot_pw');
	}

	public function change_password(){
		if(isset($_GET['ms'])){
			$data['u_id'] = $id = $_GET['ms'];
			$token = $_GET['te'];

			$verify = $this->db->
			select('*')->
			from('glg_users')->
			where('token', $token)->
			get()->result_array();

			if(!empty($verify)){
				if(isset($_POST['password'])){

					$pw1 = $_POST['password'];
					$conpw = $_POST['confirm_password'];

					if($pw1 != $conpw){
						$this->session->set_userdata('swal', 'Sorry, but passwords do not match. Please try again.');
					}else{
						$pw2 = password_hash($pw1, PASSWORD_DEFAULT);
						$token = md5(rand(1,8));
						$this->db->
						set('password', $pw2)->
						set('other_password', $pw1)->
						set('token', $token)->
						where('user_id', $id)->
						update('glg_users');
						$this->session->set_userdata('swal', 'Password changed successfully.');
						redirect('login');
					}
				}
			} else{
				$this->session->set_userdata('swal', 'Access not allowed.');
				redirect('login');
			}
		}
		$this->load->view('change_pw');
	}

}
