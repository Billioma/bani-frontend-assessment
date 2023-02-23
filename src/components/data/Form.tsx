import { flag } from "../../assets/exports";
import { IoIosArrowDown } from "react-icons/io";
import CustomInput from "../common/CustomInput";

const Form = () => {
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
              <CustomInput placeholder="09389334332" />
            </span>
          </div>
        </div>

        <div>
          <div className="my-[16px] text-[14px]">
            Your full name <span className="text-red">*</span>
          </div>

          <div className="flex items-center gap-[25px]">
            <span className="w-full">
              <CustomInput placeholder="First name" />
            </span>
            <span className="w-full">
              <CustomInput placeholder="Last name" />
            </span>
          </div>
        </div>

        <div>
          <div className="my-[16px] text-[14px]">
            Email address <span className="text-red">*</span>
          </div>
          <CustomInput placeholder="e.g rodney@gmail.com" />
        </div>

        <div>
          <div className="my-[16px] text-[14px]">Your message</div>
          <CustomInput area placeholder="Write a message here" />
        </div>
      </div>
    </>
  );
};

export default Form;
