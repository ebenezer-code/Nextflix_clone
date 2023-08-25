import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { plans } from "./data";

const Plan = ({ nextStep, selectedPlan, setSelectedPlan }) => {
  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  console.log(selectedPlan);

  return (
    <div>
      <Navbar text="Sign in" href="/login" />

      <div className="w-full flex flex-col p-12">
        <div className="w-full flex flex-col mb-4">
          <p className="text-gray-800 uppercase">Step 2 of 3</p>
          <h1 className="text-2xl font-bold">
            Choose the plan that's right for you.
          </h1>
        </div>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-1 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col items-center p-1 gap-2 rounded ${
                selectedPlan.id === plan.id
                  ? "border-2 border-red-500 scale-105"
                  : "border border-gray-300"
              }`}
              onClick={() => handlePlanChange(plan)}
            >
              <div className="w-full bg-gradient-to-r from-blue-700 to-red-600 text-white p-3 h-24 rounded">
                <h1 className="text-lg font-bold">{plan.name}</h1>
                <p className="text-gray-300">{plan.resolution}</p>
              </div>
              <div className="w-full flex flex-col gap-4 p-3">
                {plan.features.map((feature) => (
                  <div
                    className="flex items-center gap-2 py-3 border-b border-gray-200 border-solid"
                    key={feature}
                  >
                    <div
                      className={`flex items-center justify-center w-6 h-6 rounded-full ${
                        selectedPlan.id === plan.id
                          ? "bg-red-500"
                          : "bg-gray-300"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <p className="text-gray-600">{feature.name}</p>
                      <p className="text-gray-800 text-sm font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {selectedPlan.id === plan.id ? (
                <p className="flex items-center gap-1 text-gray-800 text-center mb-2">
                  <MdDone className="text-gray-500" />
                  Selected
                </p>
              ) : null}
            </div>
          ))}
        </div>
        <button
          onClick={nextStep}
          className="w-96 self-center mt-12 bg-red-600 hover:bg-red-800 text-white p-3 rounded"
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Plan;
