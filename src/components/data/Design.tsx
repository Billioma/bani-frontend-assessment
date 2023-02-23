import { billi } from "../../assets/exports";
import { icons } from "../common/data";

const Design = () => {
  return (
    <>
      <div className="bg-white pt-[32px]">
        <div className="flex gap-[16px] items-start pl-[16px] pr-[30px]">
          <span>
            <img src={billi} alt="icon" className="w-[70px] " />
          </span>
          <div>
            <div className="font-bold text-[16px]">Billi Design</div>
            <div className="mt-[8px] text-[14px] text-[#65717C]">
              <a href="https://bani.africa/billidesign">
                https://bani.africa/billidesign
              </a>
            </div>
            <div className="mt-[16px] text-[14px] font-bold">
              Payment Description
            </div>
            <div className="mt-[8px] text-[14px] text-[#65717C]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus hic provident velit facilis ex quas, quaerat aliquam
              ullam accusantium ad!
            </div>
          </div>
        </div>

        <div className="flex border-t mx-[20px] gap-[12px] border-[#e6e6e6] py-[24px] mt-[30px]">
          {icons.map((data, i) => (
            <span key={i}>
              <img src={data} alt="icons" className="w-[30px]" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Design;
