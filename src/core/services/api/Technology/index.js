import http from "../../interceptor/interceptor"

export const getTechnology = async () => {
    try {
      const result = await http.get("/Technology");
  
      return result;
    } catch (error) {
      return false;
    }
  };