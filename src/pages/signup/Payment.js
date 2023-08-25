import React from "react";
import Navbar from "../../components/Navbar";
import { HiOutlineLockClosed } from "react-icons/hi";
import { FcLock } from "react-icons/fc";
import Footer from "../../components/Footer";
import PaystackPop from "@paystack/inline-js";

const Payment = ({ amount }) => {
  return (
    <div>
      <Navbar text="Sign Out" href="/login" />
      <div className=" max-w-[914px] mx-auto my-6 py-5 px-8 lg:pb-16">
        <div className=" w-[50px] h-[50px] rounded-full md:mx-auto border-2 border-red-600 flex items-center justify-center my-5">
          <HiOutlineLockClosed className=" text-3xl text-red-600" />
        </div>
        <div className=" text-left md:text-center">
          <small>STEP 3 OF 3</small>
          <h2 className=" font-medium text-[32px]">Choose how to pay</h2>
          <p className="text-[18px] py-2 max-w-[500px] md:mx-auto">
            Your payment is encrypted and you can change how you pay anytime.
          </p>
          <p className="text-[18px] font-medium">
            Secure for peace of mind.
            <span>Cancel easily online.</span>
          </p>
        </div>
        <div className=" max-w-[500px] mx-auto my-6">
          <small className="flex items-center justify-end gap-1">
            End-to-end encrypted <FcLock />
          </small>
          <div
            className=" border-2 border-gray-300 rounded-md p-4 flex items-center"
            onClick={() => handlePayment(amount)}
          >
            <div className=" grow flex flex-col md:flex-row gap-2">
              <p className="">Credit or Debit Card</p>
              <div className="flex gap-1">
                <img
                  src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
                  alt="visa"
                />
                <img
                  src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                  alt="Master card"
                />
                <img
                  src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VERVE.png"
                  alt="verve"
                />
              </div>
            </div>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-mirrorinrtl="true"
                className="default-ltr-cache-0 e1mhci4z1"
                data-name="ChevronRight"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const handlePayment = (amount) => {
  const paystack = new PaystackPop();
  paystack.newTransaction({
    key: "pk_test_aa69027aa9cd0d4d8c982dc1928559e94a66e38e",
    email: "example@email.com",
    amount: amount * 100,

    onSuccess: (transaction) => {
      // Payment complete! Reference: transaction.reference
      window.location = "/movies";
    },
    onCancel: () => {
      // user closed popup
    },
  });
};

export default Payment;
