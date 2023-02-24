import { flag } from "../../assets/exports";
import { IoIosArrowDown } from "react-icons/io";
import CustomInput from "../common/CustomInput";

const PaymentForm = ({ values, setValues }: any) => {
  return (
    <>
      <div className="bg-white mt-[16px] pt-[12px] pb-[24px] px-[16px]">
        <div className="font-bold">Customer's details</div>
        <div>
          <div className="mt-[16px] text-[14px]">
            Your phone number <span className="text-red">*</span>
          </div>

          <div className="flex items-center gap-[25px] mt-[16px] w-full">
            <span className="border w-[175px] rounded-md border-[#C1C1C1]">
              <div className="flex items-center p-[11px] justify-between">
                <span className="flex gap-[8px]">
                  <img src={flag} alt="flag" />
                  <span className="text-[#C1C1C1]">Nig (+234)</span>
                </span>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
            </span>
            <span className="w-[248px]">
              <CustomInput
                value={values.customer_phone}
                type="number"
                onChange={(e: any) =>
                  setValues({
                    ...values,
                    customer_phone: e.target.value,
                  })
                }
                placeholder="09389334332"
              />
            </span>
          </div>
        </div>

        <div>
          <div className="my-[16px] text-[14px]">
            Your full name <span className="text-red">*</span>
          </div>

          <div className="flex items-center gap-[25px]">
            <span className="w-full">
              <CustomInput
                placeholder="First name"
                type="text"
                value={values.customer_first_name}
                onChange={(e: any) =>
                  setValues({
                    ...values,
                    customer_first_name: e.target.value,
                  })
                }
              />
            </span>
            <span className="w-full">
              <CustomInput
                placeholder="Last name"
                type="text"
                value={values.customer_last_name}
                onChange={(e: any) =>
                  setValues({
                    ...values,
                    customer_last_name: e.target.value,
                  })
                }
              />
            </span>
          </div>
        </div>

        <div>
          <div className="my-[16px] text-[14px]">
            Email address <span className="text-red">*</span>
          </div>
          <CustomInput
            type="email"
            placeholder="e.g rodney@gmail.com"
            value={values.customer_email}
            onChange={(e: any) =>
              setValues({
                ...values,
                customer_email: e.target.value,
              })
            }
          />
        </div>

        <div>
          <div className="my-[16px] text-[14px]">Your message</div>
          <CustomInput
            area
            placeholder="Write a message here"
            value={values.message}
            onChange={(e: any) =>
              setValues({
                ...values,
                message: e.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
