import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";
// import "./TrackOrder.css"; // Import your CSS file for animations

const TrackOrder = () => {
  const { orders, loading } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch, user._id]);

  const data = orders && orders.find((item) => item._id === id);

  const steps = [
    "Processing",
    "Transferred to delivery partner",
    "Shipping",
    "Received",
    "On the way",
    "Delivered",
    "Processing refund",
    "Refund Success",
  ];

  useEffect(() => {
    if (data) {
      const currentStepIndex = steps.indexOf(data.status);
      setCurrentStep(currentStepIndex);
    }
  }, [data, steps]);

  if (loading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  return (
    <div className="flex 800px:gap-[150px] 370px:flex-col 800px:flex-row justify-center  h-full p-16">
      {/* Dynamic Progress Bar */}
      <div className="flex flex-col items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index < steps.length - 1 ? "mb-4" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center ${
                index <= currentStep ? "bg-rose-500 " : "bg-gray-300"
              }`}
            >
              <span
                className={`text-xs ${
                  index <= currentStep
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {index + 1}
              </span>
            </div>
            <div
              className={`text-xs bg-red-100 p-1 rounded ${
                index === currentStep ? "bg-red-500 text-white text-[16px] font-bold animate-pulse" : "text-gray-600"
              }`}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-4 w-1 ${
                  index < currentStep ? "bg-rose-700" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="800px:w-[450px] h-[500px] bg-gray-400">
    
      </div> */}
    </div>
  );
};

export default TrackOrder;
