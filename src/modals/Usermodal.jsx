import React, { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { addFriend } from "../redux/friendSlice";
const Usermodal = ({ onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [friends, setFriends] = useState([]);

  
  const disp=useDispatch()
  const addFriendInput = (event) => {
    disp(addFriend(inputValue))
    onClose()
    
  };
  const handleInputChange = (e) => {
    console.log(e.target.value,"i am input")
    setInputValue(e.target.value); // Update inputValue in the state with the new input value
  };

  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <span onClick={onClose} className="close-btn">&times;</span>
        <form >
          <input
            type="text"
            id="friendName"
            value={inputValue} // Value is bound to the state
            onChange={handleInputChange} 
            placeholder="Enter Friend Name"
          />
          <div className="flex lfex-row justify-content-center">

          <button type="submit" className="submit-btn" onClick={addFriendInput}>
            Add friend
          </button>
          </div>
         
        </form>
        {
            console.log("i am input",inputValue)
        }
      </div>
    </div>
  );
};

export default Usermodal;