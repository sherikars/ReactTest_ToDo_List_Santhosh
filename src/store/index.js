import { applyMiddleware, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";
import { ToDoReducer } from "../reducers";
import { rootSaga } from "../saga/rootsaga";

const sagaMid = createSagaMiddleWare();

export const toDoStore = createStore(ToDoReducer, applyMiddleware(sagaMid));

sagaMid.run(rootSaga);
