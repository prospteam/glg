<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends MY_Controller {

	public function index(){

		
		$myArr = array(
			"John"=>"XDXD", 
			"John1"=>"XDXD", 
			"John3"=>"XDXD", 
		);

		echo json_encode($myArr);

	}
	
	public function test(){
		// echo "hi";
		// $firstName = "Fred";
		// $lastName "Flintstone";

		// echo $firstName;
		$body = file_get_contents('php://input');
		$json = json_decode($body, true);
	}
	public function asd(){

		
					echo json_encode(array(
						'status'=>'success'
					));
					exit();

	}


	public function login(){
		// $myArr = array(
		// 	"John"=>"XDXD", 
		// );
		//if(!empty($_POST)){
			$myArr = $_POST;
		// }
		echo json_encode($myArr);
	}
	// public function check(){
	// 	echo "test check";
	// }
}
