import http from "../../interceptor/interceptor";

export const getCourseDeatil = async (id) => {
  try {
    const result = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCourseById = async (id) => {
  try {
    const result = await http.get(`/Course/${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCourseComment = async (id) => {
  try {
    const result = await http.get(`/Course/GetCourseCommnets/${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
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

export const rejectComment = async (id) => {
  try {
    const result = await http.post(
      `/Course/RejectCourseComment?CommentCourseId=${id}`
    );
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deletComment = async (id) => {
  try {
    const result = await http.delete(
      `/Course/DeleteCourseComment?CourseCommandId=${id}`
    );
    //console.log(result);
    return result;
  } catch (error) {
    // console.log(error);
    // return [];
    throw new Error(error.response.data.ErrorMessage[0]);
  }
};

export const getResList = async (id) => {
  try {
    const result = await http.get(`/CourseReserve/${id}`);
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPayList = async (id) => {
  try {
    const result = await http.get(`/CoursePayment/ListOfWhoIsPay?CourseId=${id}`);
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deletReserve = async (id) => {
  try {
    const result = await http.delete("/CourseReserve", { id });
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCourseGroupe = async (teacherId, courseId) => {
  try {
    const result = await http.get(
      `CourseGroup/GetCourseGroup?TeacherId=${teacherId}&CourseId=${courseId}`
    );
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    // return [];
  }
};

