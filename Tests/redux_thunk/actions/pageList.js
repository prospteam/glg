import { GET_PAGE_LIST } from '../constants';
export function setPageList(pageList) {

  return {
    type: GET_PAGE_LIST,
    payload: pageList,
  };

}
export function getPageList() {
  return async (dispatch) => {

    try {
      const apiReq = await fetch('http://dummy.restapiexample.com/api/v1/employees', {
        method: 'GET'
      });
      // console.log("apiReq_______");
      // console.log(apiReq);
      // console.log("apiReq_______");

      const responseJson = await apiReq.json();

      console.log("getting employees");
      console.log(responseJson);
      console.log("http://dummy.restapiexample.com/api/v1/employees");
      // console.log("GETTING COREECT");

      console.log(await dispatch(setPageList(responseJson.data)));
      // console.log(await dispatch(setPageList(apiReq)));

      return apiReq || [];
    } catch (error) {
      // console.log("GETTING ERROR");
      // return [];
      console.error(error);
    }
  };
}
