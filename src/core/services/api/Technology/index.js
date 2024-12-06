import http from "../../interceptor/interceptor"

export const getTechnology = async () => {
    try {
      const result = await http.get("/Technology");
  
      return result;
    } catch (error) {
      return false;
    }
  };

  export const addTech = async (user) => {
    try {
      const result = await http.post("/Technology", user);
  
      return result;
    } catch (error) {
      return false;
    }
  };

  export const updateTech = async (user) => {
    try {
      const result = await http.put("/Technology", user);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export const getTechWithId = async (id) => {
    try {
      const result = await http.get(`/Technology/${id}`);
  
      return result;
    } catch (error) {
      return false;
    }
  };
  
  