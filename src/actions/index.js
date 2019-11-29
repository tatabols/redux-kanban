import * as api from "../api";

let _id = 1;
export const uniqueId = () => {
  return _id++;
};

export const createTask = ({
  title,
  description,
  status = "Unstarted"
}) => dispatch => {
  api.createTask({ title, description, status }).then(resp => {
    dispatch(createTaskSucceeded(resp.data));
  });
};

export const createTaskSucceeded = task => {
  return { type: "CREATE_TASK_SUCCEEDED", payload: { task } };
};

export const fetchTasks = () => dispatch => {
  api.fetchTasks().then(resp => {
    dispatch(fetchTasksSucceeded(resp.data));
  });
};

export const fetchTasksSucceeded = tasks => {
  return {
    type: "FETCH_TASKS_SUCCEEDED",
    payload: {
      tasks
    }
  };
};

const getTaskById = (tasks, id) => {
  return tasks.find(task => task.id === id);
};

export const editTask = (id, params = {}) => (dispatch, getState) => {
  const task = getTaskById(getState().tasks, id);
  task.status = params;
  api.editTask(id, task).then(resp => {
    dispatch(editTaskSucceeded(resp.data));
  });
};

export const editTaskSucceeded = task => {
  return {
    type: "EDIT_TASK_SUCCEEDED",
    payload: {
      task
    }
  };
};
