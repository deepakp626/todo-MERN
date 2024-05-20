import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddTodo = () => {
  const Addtask = (ele) => {
    ele.preventDefault();
    if ((ele.target.task.value)) {
      const data = {
        task: ele.target.task.value,
      };
      axios
        .post("http://localhost:3000/todo/", data)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log("Error -->", err);
        });
    }else{
        console.log("reqquired data")
    }
  };
  return (
    <>
      <form onSubmit={Addtask}>
        <InputGroup className="mb-3 w-75 mx-auto mt-4">
          <Form.Control
            placeholder="Enter your Task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="task"
          />
          <Button variant="outline-secondary" id="button-addon2" type="submit">
            Add Todo
          </Button>
        </InputGroup>
      </form>
    </>
  );
};

export default AddTodo;
