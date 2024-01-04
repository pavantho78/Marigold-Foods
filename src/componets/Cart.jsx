import React,{useState} from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Cart(){
  const[activeCart,setActiveCart]=useState(false)
   const cartItems=useSelector((state)=>state.cart.cart);
   const totalQty=cartItems.reduce((totalQty,item)=>totalQty+item.qty,0)
   const totalPrice=cartItems.reduce((total,item)=>total + item.qty * item.price,0)
   const navigate=useNavigate();
    //console.log(cartItems)
     return(
        <div>
          <div className={`fixed top-0 right-0 bg-white h-full p-5 w-full lg:w-[20vw] mb-3 ${activeCart?"translate-x-0":"translate-x-full"} transition-all duration-500 z-50`}>
           <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <IoMdClose  onClick={() => setActiveCart(!activeCart)} className='border-2 border-gray-600  text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300  cursor-pointer ' />
           </div>
           {
            cartItems.length > 0 ? cartItems.map((food)=>{
                return(
                  <ItemCard key={food.id} price={food.price} img={food.img} qty={food.qty} name={food.name} id={food.id}/>
                )
             }):<h2 className='text-center text-2xl text-red-800 p-2'>!!Your Cart Is Empty!!</h2>
           }
          
           <div className='absolute bottom-0 '>
            <h3>Items : {totalQty}</h3>
            <h3>Total Amount : ₹ {totalPrice} </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button onClick={()=>navigate("/Success")} className='bg-green-500 font-bold py-2 px-3 text-white rounded-lg w-[90vw] lg:w-[18vw] mb-5'>CheckOut</button>
           </div>
          </div>
          <FaShoppingCart onClick={() => setActiveCart(!activeCart)} className={`bg-white text-5xl p-3 rounded-full shadow-md fixed bottom-4 right-4
               ${totalQty > 0 && "animate-bounce delay-500 transition-all"} `}/>
        </div>
     )
}
export default Cart;