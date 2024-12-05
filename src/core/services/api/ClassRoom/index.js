import http from "../../interceptor/interceptor"

export const getClassRoom = async () => {
    try {
      const result = await http.get("/ClassRoom");
  
      return result;
    } catch (error) {
      return false;
    }
  };