
"use client";
import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Usermodal from "../modals/Usermodal";
import { UseDispatch, useDispatch,useSelector } from "react-redux";
import { setAmount,addOrderinfo } from "../redux/friendSlice";
function Home() {
    const [showModal, setShowModal] = useState(false); // State variable to control modal visibility
const[amount,SetAmount]=useState(0)
const friends = useSelector((state) => state.friend.friends);
const totalvalue=useSelector((state)=>state.friend.amount)
const ordval=useSelector((state)=>state.friend.orders);
console.log("i am frnds data",friends);
  // Function to toggle modal visibility
  const toggleModal = (e) => {
    e.preventDefault()
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [orders, setOrders] = useState([]);
const disp=useDispatch()

console.log("i am amount printed",amount)
  return (
    
   <>
   
   {showModal && <Usermodal onClose={handleCloseModal} onSubmit={handleOpenModal} />}

   <div className="col-span-12">
     <form className="my-20 shadow-md w-full h-[90%] mx-auto mb-5">
   
    <label for="exampleInputPassword1" className="form-label pb-6">Amount</label>
  <div class="mb-5">
    
    <input type="number" className="form-control border border-black w-[75%] text-center" id="exampleInputPassword1" onChange={(e)=>SetAmount(e.target.value)}/>
  </div>
  <div class="flex flex-row space-x-4 justify-center pb-10 pt-3 mb-5">
  <button type="submit" class="btn  border-black bg-blue-300 w-[30%]" onClick={toggleModal}>Add people</button>
  <button type="button" class="btn  border-black bg-blue-300 w-[30%]" onClick={()=>{
    console.log("i am amount from check",amount,friends)
    disp(addOrderinfo({amountvalue:amount,nooffrnds:friends}))
  }}>Add order</button>
  
  </div>
</form>  
   </div>

{
    ordval?.map((val,indx)=>{
        console.log(val,"i am ordrv alues")
        return(
            <>

            </>
        )
    })
}
   </>
  );
}
export default Home