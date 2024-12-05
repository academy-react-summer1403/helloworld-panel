import http from "../../interceptor/interceptor"

export const getStatus = async () => {
    try {
      const result = await http.get("/Status");
  
      return result;
    } catch (error) {
      return false;
    }
  };