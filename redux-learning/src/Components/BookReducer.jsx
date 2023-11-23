import { buy_book } from "./BookTypes";
const initialState = {
  NumberOfBooks: 20,
};

const BooKReducer = (State = initialState, action) => {
  switch (action.type) {
    case buy_book:
      return {
        ...State,
        NumberOfBooks: State.NumberOfBooks - 1,
      }
      default :return State;
  }
};
export default BooKReducer;
