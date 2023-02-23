import React from "react";

const CustomInput = ({ value, area, setValue, placeholder }: any) => {
  return (
    <div>
      {area ? (
        <textarea
          className="border w-full h-[104px] border-[#C1C1C1] bg-[#FDFDFD] p-[11px] rounded-md placeholder:text-[#C1C1C1]"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          className="border w-full border-[#C1C1C1] p-[11px] rounded-md placeholder:text-[#C1C1C1]"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default CustomInput;
