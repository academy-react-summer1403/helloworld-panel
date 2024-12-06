import http from "../../interceptor/interceptor";

export const getStatus = async () => {
  try {
    const result = await http.get("/Status");

    return result;
  } catch (error) {
    return false;
  }
};

export const updateStatus = async (user) => {
  try {
    const result = await http.put("/Status", user);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addStat = async (user) => {
  try {
    const result = await http.post("/Status", user);

    return result;
  } catch (error) {
    return false;
  }
};

export const getStatWithId = async (id) => {
  try {
    const result = await http.get(`/Status/${id}`);

    return result;
  } catch (error) {
    return false;
  }
};
