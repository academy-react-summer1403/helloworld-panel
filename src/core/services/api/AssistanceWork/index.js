import http from "../../interceptor/interceptor"

export const getAssistance = async () => {
    try {
      const result = await http.get("/AssistanceWork");
  
      return result;
    } catch (error) {
      return false;
    }
  };

  export const AddAssistanceApi = async (user) => {
    try {
      const result = await http.post("/AssistanceWork", user);
  
      return result;
    } catch (error) {
      return false;
    }
  };
  
  export const getAssisWithId = async (id) => {
    try {
      const result = await http.get(`/AssistanceWork/${id}`);
  
      return result;
    } catch (error) {
      return false;
    }
  };

  export const updateAssistance = async (user) => {
    try {
      const result = await http.put("/AssistanceWork", user);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };