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

  export const getDashReport = async (data) => {
    try {
      const result = await http.get("/Report/DashboardReport", data);
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export const getUserCourseReserve = async () => {
    try {
      const res = await http.get("/CourseReserve");
      return res;
    } catch (error) {
      console.error("COURSE RESERVE  API Error:", error);
      return false;
    }
  };
  
  export const getCourseReserve = async (courseId) => {
    try {
      const res = await http.get(`/CourseReserve/${courseId}`);
      return res;
    } catch (error) {
      console.error("COURSE RESERVE API Error:", error);
      return false;
    }
  };
  export const getActiveUserManagement = async () => {
    try {
      const response = await http.get("/User/UserMannage?IsActiveUser=true");
  
      return response;
    } catch (error) {
      return false;
    }
  };
  
  export const getDeActiveUserManagement = async () => {
    try {
      const response = await http.get("/User/UserMannage?IsActiveUser=false");
  
      return response;
    } catch (error) {
      return false;
    }
  };
  