import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Design from "../components/data/Design";
import { useDispatch, useSelector } from "react-redux";
import Payment from "../components/data/Payment";
import PaymentForm from "../components/data/PaymentForm";
import { fetchPageDetailsRequest } from "../store/pageDetails";

const Checkout = () => {
  const { page_ref } = useParams<{ page_ref: any }>();
  const dispatch = useDispatch();

  const pageDetails = useSelector((state: any) => state.pageDetails);
  const { data, isLoading } = pageDetails;

  useEffect(() => {
    dispatch(fetchPageDetailsRequest(page_ref));
  }, [dispatch, page_ref]);

  const [values, setValues] = useState({
    customer_phone: "",
    customer_email: "",
    paymentAmount: "",
    customer_first_name: "",
    customer_last_name: "",
    message: "",
    paymentQuantity: 1,
  });

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    BaniPopUp({
      amount:
        data.data.page_amount > 0
          ? data.data.page_amount
          : values.paymentAmount,
      phoneNumber: values.customer_phone,
      email: values.customer_email,
      firstName: values.customer_first_name,
      lastName: values.customer_last_name,
      merchantKey: data?.data?.page_creator_details?.account_pub_key,
      paymentPageRef: data?.data?.page_ref,
      pageItemQty: values.paymentQuantity || 1,
      onClose: (response: any) => {
        console.log("ONCLOSE DATA", response);
      },
      callback: function (response: any) {
        const message = "Payment complete! Reference: " + response?.reference;
        console.log(message, response);
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex gap-[16px] md:flex-row sm:flex-col">
          <div>
            <Design />
            <PaymentForm values={values} setValues={setValues} />
          </div>

          <div className="w-full">
            <Payment
              data={data}
              isLoading={isLoading}
              type="submit"
              values={values}
              setValues={setValues}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
