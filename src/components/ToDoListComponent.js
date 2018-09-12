import React, { Component } from "react";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Card,
  CardContent,
  IconButton,
  Divider,
  TextField,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { toDoHistory } from "../helpers";
import "../components/ToDoComponent.css";
import { getList, handleDelate, handleComplete, handleAdd } from "../actions";
import { bindActionCreators } from "redux";

class ToDoListComponent extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: {
        title: ""
      }
    };
  }

  componentDidMount() {
    this.props.getList();
  }

  handleChange = e => {
    this.setState({
      todoItem: {
        title: e.target.value
      }
    });
  };

  componentWillReceiveProps() {
    this.setState({
      todoItem: {
        title: ""
      }
    });
  }

  handleDelete = e => {
    this.props.handleDelate(e.target.getAttribute("value"));
  };

  handleComplete = e => {
    this.props.handleComplete(e.target.parentElement.getAttribute("value"));
  };

  handleSubmit = e => {
    const { todoItem } = this.state;
    this.props.handleAdd(todoItem);
  };

  handleEdit = e => {
    toDoHistory.push("/" + e.target.parentElement.getAttribute("value"));
  };

  render() {
    const { responseData } = this.props;
    return (
      <div>
        <Paper>
          <Card>
            <CardContent
              style={{
                marginRight: "70px",
                marginLeft: "70px",
                border: "1px solid gray"
              }}
            >
              <h3>To-Do List</h3>
              <TextField
                value={this.state.todoItem.title}
                onChange={this.handleChange}
                label="Title"
                placeholder="Title"
              />
              <Button
                onClick={this.handleSubmit}
                disabled={!this.state.todoItem.title.length > 0}
                style={{ marginLeft: "25px" }}
                color="primary"
                variant="contained"
              >
                Add new To-Do task
              </Button>
              <List>
                {responseData &&
                  responseData.length > 0 &&
                  responseData.map(value => (
                    <div key={value.id}>
                      <ListItem key={value.id}>
                        <div
                          className={value.completed ? "strike" : "no-strike"}
                        >
                          <ListItemText
                            onClick={this.handleEdit}
                            value={value.id}
                          >
                            {value.title}
                          </ListItemText>
                          <ListItemSecondaryAction>
                            <div>
                              <Button
                                disabled={value.completed}
                                color="primary"
                                onClick={this.handleComplete}
                                value={value.id}
                                variant="contained"
                              >
                                Complete
                              </Button>
                              <IconButton disabled={value.completed}>
                                <DeleteIcon
                                  value={value.id}
                                  onClick={this.handleDelete}
                                />
                              </IconButton>
                            </div>
                          </ListItemSecondaryAction>
                        </div>
                      </ListItem>
                      <Divider />
                    </div>
                  ))}
              </List>
            </CardContent>
          </Card>
        </Paper>
      </div>
    );
  }
}

function mapStoreToProps(state) {
  const { responseData } = state;
  return {
    responseData
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getList: getList,
      handleDelate: handleDelate,
      handleComplete: handleComplete,
      handleAdd: handleAdd
    },
    dispatch
  );

const todoList = connect(
  mapStoreToProps,
  mapDispatchToProps
)(ToDoListComponent);

export { todoList as ToDoListComponent };