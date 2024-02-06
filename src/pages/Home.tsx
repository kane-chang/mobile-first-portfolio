import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-dvh bg-white/30 flex items-center px-5" id="hero">
        <div className="space-y-5">
          <h1 className="text-accentOrange font-inter font-bold text-5xl">
            .kane-chang
          </h1>
          <p className="text-white font-inconsolata font-bold">Web Developer</p>
        </div>
      </div>
      <div className="h-dvh bg-white/50 flex items-center px-5" id="about">
        <div className="space-y-5">
          <h1 className="text-accentOrange font-inter font-bold text-5xl">
            This is <span className="text-accentOrange">me.</span>
          </h1>
          <p className="text-white font-inconsolata">
            I am <span className="text-accentGreen">a Web Developer</span>
            <br></br>proficient in modern front-end frameworks, with diverse
            experience across roles such as communications, non-profit and
            education.
          </p>
        </div>
      </div>
      <div
        className="h-dvh flex items-center px-5 bg-[url('./assets/sgbg_mobile.png')] md:bg-[url('./assets/sgbg_tablet.png')] lg:bg-[url('./assets/sgbg.png')] xl:bg-[url('./assets/sgbg_xl.png')] bg-center bg-cover bg-no-repeat"
        id="background"
      >
        <div className="space-y-5">
          <p className="text-white font-inconsolata">
            const background = &#91;
          </p>
          <h2 className="text-white font-inter text-4xl font-bold">
            "Philosophy",
          </h2>
          <h2 className="text-white font-inter text-4xl font-bold">
            "Storytelling",
          </h2>
          <h2 className="text-white font-inter text-4xl font-bold">"Games",</h2>
          <p className="text-white font-inconsolata">&#93;;</p>
        </div>
      </div>
      <div className="h-dvh bg-white/10 flex items-center px-5" id="projectOne">
        <div className="w-full border p-5 space-y-5 project-info">
          <img src="/src/assets/gamesync_logo.png" alt="" />
          <p className="font-inconsolata text-white">
            A <span className="text-accentBlue">streamlined</span> and{" "}
            <span className="text-accentBlue">intuitive</span> scheduler
            tailored for <span className="text-accentBlue">busy gamers</span>,
            by gamers. Estimate completion dates, share your calendars and
            conquer levels together effortlessly!
          </p>
          <div className="flex space-x-3">
            <button className="font-inter border rounded-3xl text-xl px-7 py-1 hover:text-accentBlue hover:border-accentBlue transition">
              View
            </button>
            <button className="border rounded-3xl text-xl px-3 group hover:border-accentBlue transition">
              <i className="fa-brands fa-github group-hover:text-accentBlue transition"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
