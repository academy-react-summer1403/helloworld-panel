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


export const getUserWithId = async (id) => {
  try {
    const result = await http.get(`/User/UserDetails/${id}`);

    return result;
  } catch (error) {
    return false;
  }
};

export const getComments = async (id) => {
  try {
    const result = await http.get(`/Course/CommentManagment?userId=${id}`);
    return result;
  } catch (error) {
    return false;
  }
};

export const addUser = async (user) => {
  try {
    const result = await http.post("/User/CreateUser", user);

    return result;
  } catch (error) {
    return false;
  }
};

export const deleteUser = async (userId) => {
  try {
    const result = await http.put("/User/DeleteUser", userId);

    return result;
  } catch (error) {
    return false;
  }
};
