import { takeLatest, all, put } from "redux-saga/effects";
import { TODOCONSTANTS } from "../constrants";
import {
  getToDoList,
  addToDoItem,
  completeToDoItem,
  deleteToDoItem,
  updateToDoItem
} from "../services";
 
function* getToDoLists() {
  const data = yield getToDoList().then(res => res);
  yield put({ type: TODOCONSTANTS.ToDo_GetList_Sucess, responseData: data });
}

function* getSingleList(model) {
  const data = yield getToDoList().then(res => res);
  const filetredData = data.filter(function(item) {
    return item.id.toString() === model.id;
  });
  yield put({
    type: TODOCONSTANTS.ToDo_GetList_Sucess,
    responseData: filetredData[0]
  });
}

function* addToDoList(model) {
  const data = yield addToDoItem(model).then(res => res);
  yield put({ type: TODOCONSTANTS.ToDo_GetList_Sucess, responseData: data });
}

function* deleteRequest(model) {
  const data = yield deleteToDoItem(model).then(res => res);
  yield put({ type: TODOCONSTANTS.ToDo_GetList_Sucess, responseData: data });
}

function* completeRequest(model) {
  const data = yield completeToDoItem(model).then(res => res);
  yield put({ type: TODOCONSTANTS.ToDo_GetList_Sucess, responseData: data });
}

function* submitRequest(model) {
  const data = yield updateToDoItem(model).then(res => res);
  yield put({ type: TODOCONSTANTS.ToDo_GetList_Sucess, responseData: data });
}

function* actionWatcher() {
  yield takeLatest(TODOCONSTANTS.ToDo_GetList_Request, getToDoLists);
}

function* actionAddTodoWatcher() {
  yield takeLatest(TODOCONSTANTS.ToDo_NewToDo_Request, addToDoList);
}

function* actionDeleteWatcher() {
  yield takeLatest(TODOCONSTANTS.ToDo_Delete_Request, deleteRequest);
}

function* actionCompleteWatcher() {
  yield takeLatest(TODOCONSTANTS.ToDo_Complete_Request, completeRequest);
}

function* actionGetSingleWatcher() {
  yield takeLatest(TODOCONSTANTS.ToDo_GetSingle_Request, getSingleList);
}

function* actionSubmitWatcher() {
  yield takeLatest(TODOCONSTANTS.ToDo_Submit_Request, submitRequest);
}

export function* rootSaga() {
  yield all([
    actionWatcher(),
    actionAddTodoWatcher(),
    actionDeleteWatcher(),
    actionCompleteWatcher(),
    actionGetSingleWatcher(),
    actionSubmitWatcher()
  ]);
}
