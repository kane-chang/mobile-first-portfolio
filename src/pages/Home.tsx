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
        className="h-dvh bg-white/20 flex items-center px-5 bg-[url('./assets/sgbg_mobile.png')] md:bg-[url('./assets/sgbg_tablet.png')] lg:bg-[url('./assets/sgbg.png')] xl:bg-[url('./assets/sgbg_xl.png')] bg-center bg-cover bg-no-repeat"
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
    </>
  );
};

export default Home;
