import React from "react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="text-white">
      <section className="landing-page-hero lg:h-[100vh]">
        <div className="bg-[rgba(0,0,0,0.65)] h-full">
          <div className=" max-w-[1170px] mx-auto p-6">
            <header>
              <nav className="flex justify-between items-center">
                <h2 className="text-[#e50914] text-2xl lg:text-5xl font-bold">
                  NETFLIX
                </h2>
                <button className="transition ease-in-out duration-300 delay-150 py-1 px-4 bg-[#e50914] hover:bg-red-700 rounded-md">
                  Sign In
                </button>
              </nav>
            </header>
            <div className=" py-12 md:py-24 md:pt-32">
              <h1 className="text-[2rem] lg:text-[3rem] font-bold text-center">
                Unlimited movies, TV shows, and more
              </h1>
              <p className="mt-[1rem] text-center font-normal text-[1.125rem] lg:text-[1.5rem]">
                Watch anywhere. Cancel anytime.
              </p>
              <div className=" mt-6 ">
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
                    className="bg-[rgba(22,22,22,0.7)] p-4 grow border [rgba(128,128,128,0.7)] rounded-md font-medium"
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
        </div>
      </section>
      <div className="w-full h-2 bg-[rgb(35,35,35)]" />
      <section className="bg-black py-14 md:py-[72px]">
        <div className="flex flex-col lg:flex-row items-center gap-4 p-6 max-w-[1170px] mx-auto">
          <div className="text-center lg:text-left">
            <h2 className="text-[2rem] lg:text-[3rem] font-bold">
              Enjoy on your TV
            </h2>
            <p className=" mt-4  font-normal text-[1.125rem] lg:text-[1.5rem]">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/tv.png"
              alt="TV image"
              className="w-[330px] md:w-[640px] lg:w-[779px] z-10"
            />
            <video
              data-uia="nmhp-card-animation-asset-video"
              autoPlay=""
              playsInline=""
              muted=""
              loop=""
              className="absolute max-[290px]:w-[165px] max-[290px]:top-[37px] max-[290px]:left-[32px] w-[241px] top-[51px] left-[43px] md:w-[473px] md:left-[80px] md:top-[93px] lg:w-[370px] lg:left-[68px] lg:top-[79px] z-0"
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </section>
      <div className="w-full h-2 bg-[rgb(35,35,35)]" />
      <section className="bg-black py-14 md:py-[72px]">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-4 p-6 max-w-[1170px] mx-auto">
          <div className="text-center lg:text-left w-full">
            <h2 className="text-[2rem] lg:text-[3rem] font-bold">
              Download your shows to watch offline
            </h2>
            <p className=" mt-4  font-normal text-[1.125rem] lg:text-[1.5rem]">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div className="relative w-full">
            <img
              src="/images/mobile.jpg"
              alt="mobile image"
              className="w-full"
            />
            <div className=" py-1 px-2 overflow-hidden absolute left-[30px] bottom-0 md:left-[140px] md:bottom-10 lg:left-[110px] bg-black w-[80%] md:w-[60%] border border-[rgba(128,128,128,0.7)] rounded-xl z-10">
              <div className="flex items-center gap-4">
                <img
                  src="/images/boxshot.png"
                  alt="boxshot image"
                  className=" w-8 h-12 md:w-11 md:h-16 lg:w-12 lg:h-[72px]"
                />
                <div className="grow">
                  <p className=" font-medium text-sm md:text-base">
                    Stranger Things
                  </p>
                  <small className=" font-normal text-xs md:text-sm text-[#0071eb]">
                    Downloading...
                  </small>
                </div>
                <img
                  src="/images/download-icon.gif"
                  alt="download gif"
                  className=" w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-2 bg-[rgb(35,35,35)]" />
      <section className="bg-black py-14 md:py-[72px]">
        <div className="flex flex-col lg:flex-row items-center gap-4 p-6 max-w-[1170px] mx-auto">
          <div className="text-center lg:text-left w-full">
            <h2 className="text-[2rem] lg:text-[3rem] font-bold">
              Watch everywhere
            </h2>
            <p className=" mt-4  font-normal text-[1.125rem] lg:text-[1.5rem]">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="relative w-full"></div>
        </div>
      </section>
      <div className="w-full h-2 bg-[rgb(35,35,35)]" />
      <section className="bg-black py-14 md:py-[72px]">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-4 p-6 max-w-[1170px] mx-auto">
          <div className="text-center lg:text-left w-full">
            <h2 className="text-[2rem] lg:text-[3rem] font-bold">
              Create profiles for kids
            </h2>
            <p className=" mt-4  font-normal text-[1.125rem] lg:text-[1.5rem]">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          <div className="relative w-full">
            <img src="/images/kids.png" alt="kids image" className="mx-auto" />
          </div>
        </div>
      </section>
      <div className="w-full h-2 bg-[rgb(35,35,35)]" />
      <FAQ />
      <div className="w-full h-2 bg-[rgb(35,35,35)]" />
      <Footer />
    </div>
  );
};

export default LandingPage;
