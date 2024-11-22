
import http from "../../interceptor/interceptor"

const getBlogList = async (params) => {
    try {
      const result = await http.get(
        "/News?PageNumber=1&SortingCol=InsertDate&SortType=DESC",
        { params: params }
      );
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  export default getBlogList;