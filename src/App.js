import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";
import "./css/main.css";
function App() {
  return (
    <Provider store={store}>
      <Todos />
      <DisplayTodos />
    </Provider>
  );
}

export default App;
