import { TODOCONSTANTS } from "../constrants";

export function ToDoReducer(state = {}, actions) {
  switch (actions.type) {
    case TODOCONSTANTS.ToDo_GetList_Request:
      return {
        loading: true
      };
    case TODOCONSTANTS.ToDo_GetList_Sucess:
      return {
        loading: true,
        responseData: actions.responseData
      };
    case TODOCONSTANTS.ToDo_NewToDo_Request:
      return {
        loading: true
      };
    case TODOCONSTANTS.ToDo_Delete_Request:
      return {
        loading: true
      };
    case TODOCONSTANTS.ToDo_GetSingle_Request:
      return {
        loading: true
      };
    case TODOCONSTANTS.ToDo_GetSingle_Sucess:
      return {
        loading: true,
        responseData: actions.responseData
      };
    case TODOCONSTANTS.ToDo_Submit_Request:
      return {
        loading: true
      };
    case TODOCONSTANTS.ToDo_Change_Request:
      return {
        loading: false,
        responseData: actions.responseData
      };
    default:
      return state;
  }
}
