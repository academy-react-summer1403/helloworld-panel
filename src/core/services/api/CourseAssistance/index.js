import http from "../../interceptor/interceptor"

export const getCourseAssistance = async () => {
    try {
      const result = await http.get("/CourseAssistance");
  
      return result;
    } catch (error) {
      return false;
    }
  };
