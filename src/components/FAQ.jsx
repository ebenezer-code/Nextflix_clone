import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FAQ = () => {
  const [showInfo, setShowInfo] = useState(false);

  const questions = [
    {
      id: 1,
      title: "What is Netflix?",
      info: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      title: "How much does Netflix cost?",
      info: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      title: "Where can i watch?",
      info: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: 4,
      title: "How do i cancel?",
      info: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      title: "What can i watch on Netflix?",
      info: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 6,
      title: "Is Netflix goods for kids?",
      info: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <div className="bg-black">
      <div className="max-w-[1170px] mx-auto p-6">
        <h2 className="text-[2rem] lg:text-[3rem] font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className=" mt-6">
          {questions.map((question) => {
            const { id, title, info } = question;
            return (
              <article
                key={id}
                className=" mb-2 text-lg lg:text-2xl font-normal"
              >
                <header
                  className="flex items-center justify-between bg-[rgb(45,45,45)] hover:bg-[#393939] p-6 border-b border-b-black"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <h4 className="grow ">{title}</h4>
                  <button>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button>
                </header>

                <p
                  className={`${
                    showInfo
                      ? " flex h-fit transition-all ease-in delay-200 duration-400 p-6 "
                      : "hidden h-0 p-0 overflow-hidden"
                  } bg-[rgb(45,45,45)] `}
                >
                  {info}
                </p>
              </article>
            );
          })}
        </div>
        <div className=" my-11 ">
          <h3 className="text-center font-normal text-[1.125rem] lg:text-[1.25rem]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form className="flex gap-2 flex-col md:flex-row mt-4 md:max-w-[580px] mx-auto">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email address"
              className="bg-[rgba(22,22,22,0.7)] p-4 grow border border-[rgba(128,128,128,0.7)] rounded-md font-medium"
            />
            <button
              type="submit"
              className=" flex items-center transition ease-in-out duration-300 delay-150  py-2 px-4 w-fit bg-[#e50914] hover:bg-red-700  rounded-md mx-auto md:text-[1.5rem]"
            >
              Get Started{" "}
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
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
