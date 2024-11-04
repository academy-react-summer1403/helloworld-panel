import http from "../../interceptor/interceptor"


export const getReport = async () => {
    try {
      const result = await http.get("/Home/LandingReport");
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  