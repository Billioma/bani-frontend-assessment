import { BsDash, BsPlus } from "react-icons/bs";
import CustomInput from "../common/CustomInput";

const Payment = ({ values, isValid, isDisabled, data, setValues }: any) => {
  const incrementValue = () => {
    setValues({
      ...values,
      paymentQuantity: values.paymentQuantity + 1,
    });
  };

  const decrementValue = () => {
    if (values.paymentQuantity > 1) {
      setValues({
        ...values,
        paymentQuantity: values.paymentQuantity - 1,
      });
    }
  };
  console.log(isDisabled);
  return (
    <>
      <div className="bg-white lg:w-[480px] md:w-auto sm:w-auto py-[24px] px-[16px]">
        <div className="font-bold text-[16px]">Payment for product</div>

        {data && data.data.page_amount > 0 ? (
          <>
            <div className="flex justify-between items-center mt-[32px]">
              <span className="text-[14px]">Quantity</span>

              <div className="flex gap-[8px]">
                <div className="bg-[#5444F2] cursor-pointer text-white p-2 rounded-full">
                  <BsDash onClick={decrementValue} />
                </div>

                <span className="border h-[32px] w-[35px] flex justify-center items-center rounded-md text-[#C1C1C1] border-[#C1C1C1]">
                  {values.paymentQuantity}
                </span>

                <div className="bg-[#5444F2] cursor-pointer text-white p-2 rounded-full">
                  <BsPlus onClick={incrementValue} />
                </div>
              </div>
            </div>
            <div className="mt-[40px] text-[14px]">Total</div>

            <div className="flex items-center pr-[8px] justify-between mt-[16px]  mb-[32px] border border-[#C1C1C1] rounded-[8px]">
              <div className="bg-[#ECEBF4] rounded-l-[8px] p-[10px]">NGN</div>
              <div className="text-[14px]">{data.data.page_amount}</div>
            </div>
          </>
        ) : (
          <>
            <div className="text-[14px] mt-[40px]">Amount</div>

            <div className="flex items-center mt-[24px] mb-[32px] border border-[#C1C1C1] rounded-[8px]">
              <div className="bg-[#ECEBF4] rounded-l-md p-[11px]">NGN</div>
              <div className="w-full">
                <CustomInput
                  value={values.paymentAmount}
                  placeholder="1,000"
                  onChange={(e: any) =>
                    setValues({
                      ...values,
                      paymentAmount: e.target.value,
                    })
                  }
                  opt
                />
              </div>
            </div>
          </>
        )}
        <button
          disabled={!isValid || isDisabled}
          className={`w-full ${
            (!isValid || isDisabled) && "opacity-[0.5]"
          }  bg-[#5444F2] py-[13px] text-white text-[14px] font-medium rounded-[8px]`}
        >
          Pay{" "}
          {data && data.data.page_amount > 0
            ? data.data.page_amount
            : Number(values.paymentAmount).toLocaleString()}
        </button>
      </div>
    </>
  );
};

export default Payment;
