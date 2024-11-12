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
