import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchase_book from "./BookAction";

function BookContainer() {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch=useDispatch()
  return(
    <>
    <div>{noOfBooks}</div>
     <button onClick={()=>{dispatch(purchase_book())}}>Buy a Book</button>
    </>
     
  )
}

export default BookContainer;
