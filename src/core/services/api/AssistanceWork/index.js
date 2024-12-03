import http from "../../interceptor/interceptor"

export const getAssistance = async () => {
    try {
      const result = await http.get("/AssistanceWork");
  
      return result;
    } catch (error) {
      return false;
    }
  };