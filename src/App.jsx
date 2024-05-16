import { useSelector } from "react-redux";
import "./App.css";

function App() {
  let store = useSelector((store) => store.authReducer);
  console.log(store);
  return (
    <div>
      <h1 className=" font-bold text-3xl"> hello RAnjan</h1>
    </div>
  );
}

export default App;
