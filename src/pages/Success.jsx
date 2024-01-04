import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { AiFillCheckCircle } from "react-icons/ai";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col lg:mr-32 items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
           <AiFillCheckCircle className="justify-center text-blue-600 items-center ml-36 w-16 h-16" />
          <h2 className="text-3xl font-bold  mb-2 text-center text-red-950">Order Placed!</h2>
          <p className="text-gray-950">Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;