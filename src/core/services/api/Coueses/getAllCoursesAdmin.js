import http from "../../interceptor/interceptor";

export const getAllCourses = async (params) => {
  try {
    const result = await http.get(
      "/Course/CourseList?PageNumber=1&SortingCol=DESC&SortType=Expire",
      { params: params }
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
