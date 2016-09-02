import React from 'react';
import { PRIORITIES } from '../constants/priorities';

import {
  Button,
  ControlLabel,
  Col,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from 'react-bootstrap';

const hasMinlen = (value) => (value && value.trim().length > 5);

const TaskForm = ({ form, task, addTask, change, reset }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addTask({
      ...task,
      priority: parseInt(task.priority, 10),
      text: task.text.trim(),
    });
    reset();
  };

  return (
    <Form horizontal={ true } onSubmit={ onSubmit }>
      <FormGroup validationState={ form.fields.text.valid ? null : 'error' }>
        <Col componentClass={ ControlLabel } sm={ 2 }>Task</Col>
        <Col sm={ 10 }>
          <FormControl
            type="text"
            onChange={ change('text', hasMinlen) }
            value={ task.text }
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col componentClass={ ControlLabel } sm={ 2 }>Priority</Col>
        <Col sm={ 10 }>
          <FormControl
            componentClass="select"
            value={ task.priority }
            onChange={ (event) => change('priority')(event.target.value) }>
            { PRIORITIES.map((priority, i) =>
                <option key={ i } value={ i }>{ priority }</option>
              )
            }
          </FormControl>
        </Col>
      </FormGroup>

      <FormGroup>
        <Button
          bsStyle="info"
          className="add-task-btn"
          type="submit"
          disabled={ form.pristine || !form.valid }
        >
          Add Task
        </Button>
      </FormGroup>
    </Form>
  );
};

export default TaskForm;
