import React from "react";

const CustomInput = ({
  value,
  area,
  onChange,
  onBlur,
  type,
  opt,
  placeholder,
}: any) => {
  return (
    <div>
      {area ? (
        <textarea
          className="border w-full h-[104px] border-[#C1C1C1] bg-[#FDFDFD] p-[11px] rounded-md placeholder:text-[#C1C1C1]"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={`border w-full border-[#C1C1C1] ${
            opt && "border-0"
          } p-[11px] rounded-md placeholder:text-[#C1C1C1]`}
          placeholder={placeholder}
          onBlur={onBlur}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default CustomInput;
