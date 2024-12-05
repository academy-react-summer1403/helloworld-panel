import http from "../../interceptor/interceptor"

export const getTerm = async () => {
    try {
      const result = await http.get("/Term");
  
      return result;
    } catch (error) {
      return false;
    }
  };