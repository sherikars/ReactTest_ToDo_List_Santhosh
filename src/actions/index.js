import { TODOCONSTANTS } from "../constrants";

const getSingleList = id => {
  return { type: TODOCONSTANTS.ToDo_GetSingle_Request, id: id };
};

const getList = () => {
  return { type: TODOCONSTANTS.ToDo_GetList_Request };
};

const handleDelate = id => {
  return { type: TODOCONSTANTS.ToDo_Delete_Request, id: id };
};

const handleComplete = id => {
  return { type: TODOCONSTANTS.ToDo_Complete_Request, id: id };
};

const handleSubmit = todoItem => {
  return { type: TODOCONSTANTS.ToDo_Submit_Request, model: todoItem };
};

const handleBack = () => {
  return { type: TODOCONSTANTS.ToDo_GetList_Request };
};

const handleAdd = todoItem => {
  return { type: TODOCONSTANTS.ToDo_NewToDo_Request, model: todoItem };
};

const handleChange = (todoItem,name,value) => {
  todoItem[name]=value;
  return { type: TODOCONSTANTS.ToDo_Change_Request, responseData: todoItem };
};


export {
  getSingleList,
  handleDelate,
  handleComplete,
  handleSubmit,
  handleBack,
  getList,
  handleAdd,
  handleChange
};
