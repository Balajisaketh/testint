import Home from "./Home"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addOrderinfo } from "../redux/friendSlice";
import imagemobile from "../images/Three-mobiles-min.webp"
import Usermodal from "../modals/Usermodal";
function Main(){
    const [showModal, setShowModal] = useState(false); // State variable to control modal visibility
    const[amount,SetAmount]=useState(0)
    const[Bill,setBill]=useState('')
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
    return(
        <>
           {showModal && <Usermodal onClose={handleCloseModal} onSubmit={handleOpenModal} />}

        <div className="flex flex-column h-screen bg-[#F0FFFF]">
           <div className="col-span-6  h-auto w-[40vw] my-5">
            <div className="my-28">

         <img src={imagemobile} height={1000} width={1000}/>
            </div>
           </div>
           <div className=" h-[90vh] overflow-hidden  w-[60vw] col-span-6 p-10 my-6 ">
            
           <div className="col-span-6 p-10  shadow-md">
     <form className="my-20  w-full h-[90%] mx-auto mb-5">
        <div>
        <label for="name" className="form-label mb-6 font-semibold justify-content-start">Bill Name</label>
        <div class="mb-5">
    
    <input type="text" placeholder="Bill details" className="mt-4 form-control border border-black w-[75%] text-center" id="name" onChange={(e)=>setBill(e.target.value)}/>
  </div>

        </div>
   
    <label for="exampleInputPassword1" className="form-label mb-6 font-semibold justify-content-start">Amount</label>
  <div class="mb-5">
    
    <input type="number" placeholder="Please Enter your amount" className="mt-4 form-control border border-black w-[75%] text-center" id="exampleInputPassword1" onChange={(e)=>SetAmount(e.target.value)}/>
  </div>
  <div class="flex flex-row space-x-4 justify-center pb-10 pt-3 mb-5">
  <button type="submit" class="btn  border-black bg-blue-300 w-[30%] rounded-md p-4 font-semibold" onClick={toggleModal}>Add people</button>
  <button type="button" class="btn  border-black bg-orange-300 w-[30%] rounded-md font-semibold" onClick={()=>{
    console.log("i am amount from check",amount,friends,Bill)
    disp(addOrderinfo({amountvalue:amount,nooffrnds:friends,billname:Bill}))
  }}>Add order</button>
  
  </div>
</form>  
<p>All orders</p>
   </div>

           </div>
        </div>
        <p className="font-semibold text-xl">All orders</p>
        {
            ordval?.map((val,indx)=>{
                console.log(val,"i am indx")
                
                return(
                    <>
                    <div className="col-span-6 w-[50vw] mx-auto border-2 border-black shadow-md rounded-md m-5">
                        <p className="text-lg font-semibold text-left mx-10 p-3">Bill name:<span className="text-bold text-md">{val?.Billdetails}</span></p>
                        {
                            val?.friends?.map((vl,indx)=>{
                                console.log(vl,"i am rendr")
                                return(
                                <p className="text-left mx-4 text-lg">{vl}<span className="mx-5 text-lg">Billshare:{val?.amount}</span></p>
                                )

                            })
                        }
                    </div>
                    </>
                )
            })
        }

        </>
    )
}
export default Main