
import http from "../../interceptor/interceptor"

const getBlogList = async (params) => {
    try {
      const result = await http.get(
        "/News/AdminNewsFilterList?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=&IsActive=true",
        { params: params }
      );
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  export default getBlogList;