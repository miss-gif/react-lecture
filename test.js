import axios from "axios";

export const get = async () => {
  try {
    const res = await axios.get();
    const status = res.status.toString().charAt(0);
    if (status === "2") {
      console.log(res.data);
    } else {
      console.log("API 오류");
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
