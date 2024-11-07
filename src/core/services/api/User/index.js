import http from "../../interceptor/interceptor";

const getUserList = async (params) => {
  try {
    const result = await http.get(
      "/User/UserMannage?PageNumber=0&RowsOfPage=0&SortingCol=DESC&SortType=InsertDate&Query=&IsActiveUser=true&IsDeletedUser=true&roleId=1",
      { params: params }
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default getUserList;