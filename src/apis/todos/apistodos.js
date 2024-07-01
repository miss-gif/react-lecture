import axios from "axios";
const todoURL = "https://jsonplaceholder.typicode.com/todos/";
// 자료 1개 호출하기
const getTodo = async id => {
  try {
    const res = await axios.get(`${todoURL}${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// 자료 여러개 호출하기
const getTodos = async () => {
  try {
    const res = await axios.get(todoURL);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// 자료 1개 추가하기
const postTodo = async ({ title, completed }) => {
  try {
    const res = await axios.post(todoURL, { title, completed });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// 자료 1개 전체 내용 업데이트 하기
// put 은 어떤 대상을 업데이트한다.
const putTodo = async (id, { title, completed }) => {
  try {
    const res = await axios.put(`${todoURL}${id}`, { title, completed });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// 자료 1개 중 일부분 내용 업데이트 하기
const patchTodo = async () => {
  try {
    const res = await axios.patch(todoURL);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// 자료 1개 삭제하기
const deletePhoto = async () => {
  try {
    const res = await axios.delete(todoURL);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getTodo, getTodos, postTodo, putTodo, patchTodo, deletePhoto };
