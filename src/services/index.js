import fetch from "isomorphic-fetch";

const path = "https://practiceapi.devmountain.com/api/tasks/";

const getToDoList = () => {
  return fetch(path).then(res => {
    return res.json();
  });
};

const addToDoItem = model => {
  return fetch(path, {
    method: "Post",
    body: JSON.stringify(model.model),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json();
  });
};

const completeToDoItem = model => {
  return fetch(path + model.id, {
    method: "PUT",
    body: JSON.stringify(model),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json();
  });
};

const deleteToDoItem = model => {
  return fetch(path + model.id, { method: "Delete" }).then(res => {
    return res.json();
  });
};

const updateToDoItem = model => {
  let url = path + model.model.id;
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(model.model),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json();
  });
};

export {
  getToDoList,
  addToDoItem,
  completeToDoItem,
  deleteToDoItem,
  updateToDoItem
};
