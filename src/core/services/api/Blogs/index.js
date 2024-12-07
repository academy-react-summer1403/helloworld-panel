
import http from "../../interceptor/interceptor"

const getBlogList = async (params) => {
    try {
      const result = await http.get(
        "/News?SortingCol=InsertDate&SortType=DESC",
        { params: params }
      );
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  export default getBlogList;



  export const getBlogWithId = async (id) => {
    try {
      const result = await http.get(`/News/${id}`);
      //console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export const getBlogRep = async (id) => {
    try {
      const result = await http.get(`/News/GetRepliesComments?Id=${id}`);
      //console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };


  export const addBlog = async (formData) => {
    try {
      const result = await http.post("/News/CreateNews", formData);
  
      return result;
    } catch (error) {
      return false;
    }
  };

  export const getCategoryList = async () => {
    try {
      const result = await http.get("/News/GetListNewsCategory");
  
      return result;
    } catch (error) {
      return false;
    }
  };


  export const createNewsCategory = async (data) => {
    try {
      const result = await http.post("/News/CreateNewsCategory", data);
  
      return result;
    } catch (error) {
      return false;
    }
  };