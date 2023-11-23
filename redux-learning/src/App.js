import { Provider } from "react-redux";
import store from "./Components/Store";
import BookContainer from "./Components/BookContainer";
function App() {
  return (
    <Provider store={store}>
      <BookContainer/>
    </Provider>

   
  );
}

export default App;
