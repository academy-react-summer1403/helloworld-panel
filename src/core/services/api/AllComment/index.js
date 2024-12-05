import http from "../../interceptor/interceptor";

export const getCommentList = async (params) => {
  try {
    const result = await http.get(
      `/Course/CommentManagment?PageNumber=1&SortingCol=DESC&SortType=InsertDate&Query=&Accept=false`,
      { params: params }

    );
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const decComment = async (id) => {
  try {
    const result = await http.post(
      `/Course/RejectCourseComment?CommentCourseId=${id}`
    );
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const accComment = async (id) => {
  try {
    const result = await http.post(
      `/Course/AcceptCourseComment?CommentCourseId=${id}`
    );
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const delComment = async (id) => {
  try {
    const result = await http.delete(
      `/Course/DeleteCourseComment?CourseCommandId=${id}`
    );
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getRepComnt = async (crsId, cmntId) => {
  try {
    const result = await http.get(
      `/Course/GetCourseReplyCommnets/${crsId}/${cmntId}`
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};