import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Paper,
  Card,
  CardContent,
  TextField,
  Button,
  CardActions
} from "@material-ui/core";
import { bindActionCreators } from "redux";
import { toDoHistory } from "../helpers";
import {
  getSingleList,
  handleSubmit,
  handleComplete,
  handleDelate,
  handleBack,
  handleChange
} from "../actions";

class ToDoEditComponent extends Component {
  constructor() {
    super();
    this.state = {
      originalVales: {},
      todoItem: {
        title: "",
        description: "",
        completed: false
      }
    };
  }

  componentDidMount() {
    this.props.getSingleList(this.props.match.params.id.toString());
  }

  handleChange = e => {
    const { todoItem } = this.state;
    const { name, value } = e.target;
    this.props.handleChange(todoItem, name, value);
  };

  componentWillReceiveProps(props) {
    const { responseData } = props;
    if (responseData && responseData.title) {
      if (responseData.length > 0) {
        toDoHistory.push("");
      } else {
        this.setState({
          todoItem: responseData,
          originalVales: responseData
        });
      }
    }
  }

  handleDelete = e => {
    this.props.handleDelate(this.props.match.params.id);
    toDoHistory.push("");
  };

  handleComplete = e => {
    this.props.handleComplete(this.props.match.params.id);
    toDoHistory.push("");
  };

  handleSubmit = e => {
    this.props.handleSubmit(this.state.todoItem);
    toDoHistory.push("");
  };

  handleBack = e => {
    const {originalVales} = this.state;
    this.setState({todoItem: originalVales});
  };

  handleBackToList = e => {
    this.props.handleBack();
    toDoHistory.push("");
  };

  render() {
    return (
      <div>
        {this.state &&
          this.state.todoItem &&
          this.state.todoItem.title && (
            <Paper>
              <Card>
                <CardContent>
                  <CardActions>
                    <a
                      onClick={this.handleBackToList}
                      style={{ marginBottom: "15px" }}
                    >
                      Back to Tasks
                    </a>
                  </CardActions>

                  <div>
                    <TextField
                      value={this.state.todoItem.title}
                      name="title"
                      label="Task"
                      placeholder="Task"
                      onChange={this.handleChange}
                    />
                    <Button
                      color="primary"
                      onClick={this.handleComplete}
                      disabled={this.state.todoItem.completed}
                      style={{ marginLeft: "25px" }}
                      variant="contained"
                    >
                      Complete
                    </Button>
                  </div>
                  <div>
                    <TextField
                      value={this.state.todoItem.description}
                      name="description"
                      label="description"
                      placeholder="Description"
                      onChange={this.handleChange}
                    />
                  </div>
                  <CardActions>
                    <div>
                      <Button
                        style={{ width: "auto", marginRight: "10px" }}
                        color="primary"
                        variant="contained"
                        onClick={this.handleSubmit}
                      >
                        Save
                      </Button>
                      <Button
                        color="default"
                        style={{ width: "auto", marginRight: "10px" }}
                        variant="contained"
                        onClick={this.handleBack}
                      >
                        Cancel
                      </Button>
                      <Button
                        color="secondary"
                        style={{ width: "auto", marginRight: "10px" }}
                        variant="contained"
                        onClick={this.handleDelete}
                      >
                        Delete
                      </Button>
                    </div>
                  </CardActions>
                </CardContent>
              </Card>
            </Paper>
          )}
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
      getSingleList: getSingleList,
      handleDelate: handleDelate,
      handleComplete: handleComplete,
      handleSubmit: handleSubmit,
      handleBack: handleBack,
      handleChange: handleChange
    },
    dispatch
  );

const todoEdit = connect(
  mapStoreToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(ToDoEditComponent);

export { todoEdit as ToDoEditComponent };
