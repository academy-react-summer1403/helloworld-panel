import http from "../../interceptor/interceptor"

export const getDepartment = async () => {
    try {
      const result = await http.get("/Department");
  
      return result;
    } catch (error) {
      return false;
    }
  };