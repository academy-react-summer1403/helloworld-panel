import http from "../../interceptor/interceptor"

export const getBuilding = async () => {
    try {
      const result = await http.get("/Building");
  
      return result;
    } catch (error) {
      return false;
    }
  };