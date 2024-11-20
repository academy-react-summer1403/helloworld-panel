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

export const getCourseComment = async (id) => {
  try {
    const result = await http.get(`/Course/GetCourseCommnets/${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
