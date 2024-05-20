import axios from "axios";
// import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function GridAutoSizingExample({ task,_id }) {
  const deleteTodo = () => {
    axios
      .delete(`http://localhost:3000/todo/${_id}`)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Error -->", err);
      });
  };

  const updateTodo = (ele) => {
    ele.preventDefault();
    const updateData = ele.target.task.value;
    const result = prompt("Edit the task",updateData)
    const newData = {
      updateId:_id,
      task: result,
    };
    if(result !== null){ 
      axios.put(`http://localhost:3000/todo/${_id}`,newData)
      .then(() => {
        alert("Task updated successfully")
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Error -->", err);
      })
    }
  };

  return (
    <Form
      onSubmit={updateTodo}
      className="container d-flex align-items-center justify-content-center "
    >
      <Row className="align-items-center ">
        <Col xs="auto">
          <Form.Control
            as={"input"}
            name="task"
            className="mb-2 ml-2"
            id="inlineFormInput"
            value={task}
          />
        </Col>

        <Col xs="auto" className="d-flex gap-2">
          <Button type="submit" className="mb-2">
            Update
          </Button>
          <Button type="button" className="mb-2" onClick={deleteTodo}>
            Delete
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default GridAutoSizingExample;
