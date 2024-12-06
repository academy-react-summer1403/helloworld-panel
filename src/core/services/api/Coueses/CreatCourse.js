import http from "../../interceptor/interceptor";

export const sendCourses = async (form) => {
  try {
    const result = await http.post("/Course", form);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
