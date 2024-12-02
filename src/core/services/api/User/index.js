import http from "../../interceptor/interceptor";

const getUserList = async (params) => {
  try {
    const result = await http.get(
      "/User/UserMannage?PageNumber=1&SortingCol=DESC",
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

export const acceptComment = async (id) => {
  try {
    const result = await http.post(
      `/Course/AcceptCourseComment?CommentCourseId=${id}`
    );
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const rejectComment = async (form) => {
  try {
    const result = await http.post(
      `/Course/RejectCourseComment?CommentCourseId=${form}`
    );
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
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

export const updateUser = async (user) => {
  try {
    const result = await http.put("/User/UpdateUser", user);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
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

export const addUserAccess = async (enable, roleId, userId) => {
  try {
    const result = await http.post(
      `/User/AddUserAccess`,
      {
        roleId,
        userId,
      },
      {
        params: {
          Enable: enable,
        },
      }
    );

    return result;
  } catch (error) {
    return false;
  }
};



