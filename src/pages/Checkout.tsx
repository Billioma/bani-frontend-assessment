import React from "react";
import { useParams } from "react-router-dom";
import Design from "../components/data/Design";
import Form from "../components/data/Form";
import Payment from "../components/data/Payment";

const Checkout = () => {
  const { page_ref } = useParams();
  return (
    <div>
      <div className="flex gap-[16px] md:flex-row sm:flex-col">
        <div>
          <Design />
          <Form />
        </div>

        <div className="w-full">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
