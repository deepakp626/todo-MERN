import { useEffect, useState } from "react";
import GridAutoSizingExample from "./GridAutoSizingExample";
import axios from "axios";
import AddTodo from "./AddTodo";

function App() {
  const [todo, setTodo] = useState();
  const fetchData = async () => {
    await axios
      .get("http://localhost:3000/todo")
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.log("Error ==", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
        <h1 className="text-center">Todo Api  with MERN</h1>
        <AddTodo />
        {todo?.map((ele) => (
          <GridAutoSizingExample key={ele.id} task={ele.task} _id={ele._id}  />
        ))}
    </>
  );
}

export default App;
