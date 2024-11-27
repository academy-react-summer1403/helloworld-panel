import http from "../../interceptor/interceptor";

export const getCreatCourse = async () => {
  try {
    const result = await http.get(
      "/Course/GetCreate"
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
