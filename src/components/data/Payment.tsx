import { BsDash, BsPlus } from "react-icons/bs";
import { useState } from "react";

const Payment = () => {
  const [value, setValue] = useState(1);

  const incrementValue = () => {
    setValue(value + 1);
  };

  const decrementValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <>
      <div className="bg-white lg:w-[480px] md:w-auto sm:w-auto py-[24px] px-[16px]">
        <div className="font-bold text-[16px]">Payment for product</div>

        <div className="flex justify-between items-center mt-[32px]">
          <span className="text-[14px]">Quantity</span>

          <div className="flex gap-[8px]">
            <div className="bg-[#5444F2] cursor-pointer text-white p-2 rounded-full">
              <BsDash onClick={decrementValue} />
            </div>

            <span className="border h-[32px] w-[35px] flex justify-center items-center rounded-md text-[#C1C1C1] border-[#C1C1C1]">
              {value}
            </span>

            <div className="bg-[#5444F2] cursor-pointer text-white p-2 rounded-full">
              <BsPlus onClick={incrementValue} />
            </div>
          </div>
        </div>

        <div className="mt-[40px] text-[14px]">Total</div>

        <div className="flex items-center pr-[8px] justify-between mt-[16px]  mb-[32px] border border-[#C1C1C1] rounded-[8px]">
          <div className="bg-[#ECEBF4] rounded-l-[8px] p-[10px]">NGN</div>
          <div className="text-[14px]">48,000</div>
        </div>

        <button className="w-full bg-[#5444F2] py-[13px] text-white text-[14px] font-medium rounded-[8px]">
          Pay 48,000
        </button>
      </div>
    </>
  );
};

export default Payment;
