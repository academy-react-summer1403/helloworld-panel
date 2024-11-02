import http from "../../interceptor/interceptor"

const loginAPI = async (phoneOrGmail, password, rememberMe) => {
  // console.log("obj:",obj)

  try {
    const result = await http.post(`/Sign/Login`, {
      phoneOrGmail: phoneOrGmail,
      password: password,
      rememberMe: rememberMe,
    });

    console.log("result:", result);
    if (result.token) {
      localStorage.setItem("token", result.token);
    }

    return result;
  } catch (error) {
    console.log(Error);
  }
};
export default loginAPI;
