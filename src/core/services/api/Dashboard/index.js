import http from "../../interceptor/interceptor"


export const getReport = async (data) => {
    try {
      const result = await http.get("/Home/LandingReport", data);
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  