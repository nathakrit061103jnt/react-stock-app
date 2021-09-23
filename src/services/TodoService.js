import HttpClient from "../utils/HttpClient";

const getAll = () => {
  return HttpClient.get("/todos");
};

const get = (id) => {
  return HttpClient.get(`/todos/${id}`);
};

const create = (data) => {
  return HttpClient.post("/todos", data);
};

const update = (id, data) => {
  return HttpClient.put(`/todos/${id}`, data);
};

const remove = (id) => {
  return HttpClient.delete(`/todos/${id}`);
};

const removeAll = () => {
  return HttpClient.delete(`/todos`);
};

const findByTitle = (title) => {
  return HttpClient.get(`/todos?title=${title}`);
};

const TodoService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TodoService;
