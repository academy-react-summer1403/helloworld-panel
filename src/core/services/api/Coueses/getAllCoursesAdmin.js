import http from "../../interceptor/interceptor";

export const getAllCourses = async (params) => {
  try {
    const result = await http.get(
      "/Course/CourseList?SortingCol=DESC&SortType=Expire",
      { params: params }
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const delCourse = async (data) => {
  try {
    const result = await http.delete("/Course/DeleteCourse", {data});
    // console.log("form",form);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
