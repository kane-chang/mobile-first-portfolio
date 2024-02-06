import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-dvh bg-white/30 flex items-center  px-5" id="hero">
        <div className="space-y-5">
          <h1 className="text-accentOrange font-inter font-bold text-5xl">
            .kane-chang
          </h1>
          <p className="text-white font-inconsolata font-bold">Web Developer</p>
        </div>
      </div>
      <div className="h-dvh bg-white/50 flex items-center px-5">
        <div className="space-y-5">
          <h1 className="text-accentOrange font-inter font-bold text-5xl">
            This is <span className="text-accentOrange">me.</span>
          </h1>
          <p className="text-white font-inconsolata font-bold">
            I am <span className="text-accentGreen">a Web Developer</span>
            <br></br>proficient in modern front-end frameworks, with diverse
            experience across roles such as communications, non-profit and
            education.
          </p>
        </div>
      </div>
      <div className="h-screen">Home</div>
    </>
  );
};

export default Home;
