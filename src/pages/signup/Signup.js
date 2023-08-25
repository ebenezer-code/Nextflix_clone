import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { CiMobile1 } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import Plan from "./Plan";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Payment from "./Payment";
import { plans } from "./data";

const Signup = () => {
  console.log(plans);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(plans?.[0]);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="bg-login-bg bg-cover bg-no-repeat">
            <Navbar text="Sign in" href="/login" />
            <div className=" w-full flex items-center justify-center min-h-screen">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-black/80 w-[400px] px-6 py-12 flex flex-col gap-6 shadow-lg"
              >
                <h2 className="text-white text-2xl font-bold">Sign up</h2>
                <div className="w-full flex flex-col">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="p-2 bg-[#010000] text-white outline-none ring-1 ring-gray-700  focus:ring-inset focus:ring-red-800 rounded"
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      This field is required
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  onClick={nextStep}
                  className="p-2 bg-red-600 text-white hover:bg-red-800 rounded"
                >
                  Get Started
                </button>
                <div className="flex items-center">
                  <a href="/login" className="text-red-600 hover:text-white">
                    <span className="text-white mr-1">
                      Already have an account?
                    </span>
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <Navbar text="Sign in" href="/login" />
            <div className="min-h-screen flex items-center justify-center">
              <div className="flex flex-col gap-3 items-center">
                <div className="flex gap-3 items-center">
                  <BsLaptop className="text-5xl text-red-500" />
                  <SlScreenDesktop className="text-5xl text-red-500" />
                  <CiMobile1 className="text-5xl text-red-500" />
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <p className="uppercase">Step 1 of 3</p>
                  <h1 className="text-2xl font-bold">
                    Finish setting up your account
                  </h1>
                  <p className="text-center w-1/2">
                    Netflix is personalized for you. Create a password to watch
                    Netflix on any device at any time.
                  </p>
                </div>
                <button
                  type="submit"
                  onClick={nextStep}
                  className="w-96 bg-red-600 text-white p-3 rounded hover:bg-red-800"
                >
                  Next
                </button>
                <button
                  onClick={prevStep}
                  className="text-red-600 hover:text-red-800"
                >
                  Back
                </button>
              </div>
            </div>
            <Footer />
          </div>
        );
      case 2:
        return (
          <div>
            <Navbar text="Sign in" href="/login" />
            <div className="w-full min-h-screen flex items-center justify-center">
              <div className="w-[400px] flex flex-col gap-3 items-center">
                <div className="flex flex-col gap-3 items-center">
                  <p className="uppercase text-left">Step 1 of 3</p>
                  <h1 className="text-2xl font-bold">
                    Create a password to start ypur membership
                  </h1>
                  <p className="">
                    Just a few more steps and you're done! We hate paperwork,
                    too.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full flex flex-col gap-4"
                >
                  <div className="w-full flex flex-col gap-2">
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="p-2 bg-white text-black outline-none ring-1 ring-gray-700  focus:ring-inset focus:ring-red-800 rounded"
                      placeholder="Email address"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col">
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      className="p-2 bg-white text-black outline-none ring-1 ring-gray-700  focus:ring-inset focus:ring-red-800 rounded"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <span className="text-red-500 text-xs mt-1">
                        This field is required
                      </span>
                    )}
                  </div>
                </form>
                <button
                  type="submit"
                  onClick={nextStep}
                  className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-800"
                >
                  Next
                </button>
                <button
                  onClick={prevStep}
                  className="text-red-600 hover:text-red-800"
                >
                  Back
                </button>
              </div>
            </div>
            <Footer />
          </div>
        );
      case 3:
        return (
          <div>
            <Navbar text="Sign in" href="/login" />
            <div className="w-full min-h-screen flex items-center justify-center">
              <div className="w-[400px] flex flex-col gap-3 items-center">
                <div className="rounded-full p-2 border-2 border-solid border-red-600">
                  <MdDone className="text-5xl text-red-500" />
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <p className="uppercase center">Step 2 of 3</p>
                  <h1 className="text-2xl font-bold">Choose your plan</h1>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 self-start">
                      <MdDone className="text-2xl text-red-500" />
                      <p className="">No commitments, cancel anytime.</p>
                    </div>
                    <div className="flex items-center gap-2 self-start">
                      <MdDone className="text-2xl text-red-500" />
                      <p className="">
                        Everything on Netflix for one low price.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 self-start">
                      <MdDone className="text-2xl text-red-500" />
                      <p className="">No ads and no extra fees. Ever.</p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={nextStep}
                  className="w-80 bg-red-600 text-white p-3 rounded hover:bg-red-800"
                >
                  Next
                </button>
                <button
                  onClick={prevStep}
                  className="text-red-600 hover:text-red-800"
                >
                  Back
                </button>
              </div>
            </div>
            <Footer />
          </div>
        );
      case 4:
        return (
          <Plan
            plans={plans}
            nextStep={nextStep}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        );
      case 5:
        return <Payment amount={selectedPlan?.price} />;
      default:
        return null;
    }
  };
  return <div>{renderStepContent(currentStep)}</div>;
};

export default Signup;
