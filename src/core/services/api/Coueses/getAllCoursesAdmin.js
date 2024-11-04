import http from "../../interceptor/interceptor"


export const getAllCourses = async () => {
    try {
      const result = await http.get("/Course/CourseList?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query");
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  