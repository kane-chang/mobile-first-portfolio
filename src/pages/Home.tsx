import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactButton from "../components/ContactButton";
import ProjectCard from "../components/ProjectCard";
import AboutCard from "../components/AboutCard";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    gsap.set(".project-card", { position: "absolute" });

    gsap.to(".project-card", {
      yPercent: -100,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".project-container",
        markers: true,
        start: "top 15%",
        end: "+1500px",
        scrub: 0.5,
        pin: "#projectOne",
        anticipatePin: 1,
      },
    });
  });

  return (
    <>
      <div
        className="h-svh md:h-screen bg-white/30 flex items-center px-6 md:px-16 lg:px-36 xl:px-60"
        id="hero"
      >
        <div className="space-y-4">
          <h1 className="text-accentOrange font-inter font-bold text-5xl md:text-6xl xl:text-7xl">
            .kane-chang
          </h1>
          <p className="text-white font-inconsolata md:text-xl xl:text-2xl font-bold">
            Web Developer
          </p>
        </div>
      </div>
      <div
        className="h-svh md:h-screen bg-white/50 flex flex-col justify-center px-6 md:px-16 lg:px-36 xl:px-60 space-y-16"
        id="about"
      >
        <div className="space-y-4">
          <h1 className="text-accentOrange font-inter font-bold text-5xl md:text-6xl xl:text-7xl">
            This is <span className="text-accentOrange">me.</span>
          </h1>
          <p className="text-white font-inconsolata md:text-xl xl:text-2xl">
            I am <span className="text-accentGreen">a Web Developer</span>
            <br></br>proficient in modern front-end frameworks, with diverse
            experience across roles such as communications, non-profit and
            education.
          </p>
        </div>
        <div className="about-cards flex flex-col">
          <AboutCard
            header="Characteristics"
            paragraph="Very good and short and sweet description of this quality blah blah blah"
            tagOne="Personality"
            tagTwo="Story"
            iconImg="/src/assets/smile.svg"
            imgAlt="Smile Icon"
          />
          {/* <AboutCard
            header="Technical Skills"
            paragraph="Very good and short and sweet description of this quality blah blah blah"
            tagOne="Hard Skills"
            tagTwo="Tech"
            iconImg="/src/assets/gear.svg"
            imgAlt="Gear Icon"
          />
          <AboutCard
            header="Soft Skills"
            paragraph="Very good and short and sweet description of this quality blah blah blah"
            tagOne="Soft Skills"
            tagTwo="People"
            iconImg="/src/assets/chat.svg"
            imgAlt="Chat Icon"
          /> */}
        </div>
      </div>
      <div
        className="h-svh md:h-screen flex items-center px-6 md:px-16 lg:px-36 xl:px-60 bg-[url('./assets/sgbg_mobile.png')] md:bg-[url('./assets/sgbg_tablet.png')] lg:bg-[url('./assets/sgbg.png')] xl:bg-[url('./assets/sgbg_xl.png')] bg-center bg-cover bg-no-repeat"
        id="background"
      >
        <div className="space-y-4">
          <p className="text-white font-inconsolata md:text-xl xl:text-2xl">
            const background = &#91;
          </p>
          <h2 className="text-white font-inter text-4xl md:text-6xl font-bold">
            "Philosophy",
          </h2>
          <h2 className="text-white font-inter text-4xl md:text-6xl font-bold">
            "Storytelling",
          </h2>
          <h2 className="text-white font-inter text-4xl md:text-6xl font-bold">
            "Games",
          </h2>
          <p className="text-white font-inconsolata md:text-xl xl:text-2xl">
            &#93;;
          </p>
        </div>
      </div>
      <div
        className="h-[110svh] md:h-[110vh] lg:h-[130vh] flex px-6 md:px-16 lg:px-36 xl:px-60 pt-32 lg:pt-48"
        id="projectOne"
      >
        <div className="w-full flex flex-col lg:flex-row relative project-container">
          <div className="w-full lg:w-7/12 p-4 space-y-4 rounded-xl glass-bg md:pb-8 lg:pb-40 xl:pb-[36rem]">
            <img
              className="md:w-2/3"
              src="/src/assets/gamesync_logo.png"
              alt=""
            />
            <p className="font-inconsolata md:text-xl xl:text-2xl text-white md:pb-16 xxl:pb-56">
              A <span className="text-accentBlue">streamlined</span> and{" "}
              <span className="text-accentBlue">intuitive</span> scheduler
              tailored for <span className="text-accentBlue">busy gamers</span>,
              by gamers. Estimate completion dates, share your calendars and
              conquer levels together effortlessly!
            </p>
            <div className="flex space-x-1 group">
              <a
                className="font-inter text-lg self-center border rounded-3xl text-xl md:text-3xl xl:text-5xl px-6 py-1 group-hover:text-accentBlue group-hover:border-accentBlue transition"
                href="https://gamesync-game-session-scheduler.netlify.app/"
                target="_blank"
              >
                View
              </a>
              <a
                className="border rounded-full group group-hover:text-accentBlue group-hover:border-accentBlue group-hover:rotate-45 transition"
                href="https://gamesync-game-session-scheduler.netlify.app/"
                target="_blank"
              >
                <svg
                  className="w-9 md:w-12 xl:w-14"
                  viewBox="0 0 84 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="ph:arrow-up-thin">
                    <path
                      id="Vector"
                      d="M57.5559 52.9C57.4245 52.9001 57.2943 52.8743 57.1729 52.824C57.0515 52.7737 56.9411 52.7 56.8482 52.6071C56.7553 52.5142 56.6816 52.4039 56.6313 52.2824C56.5811 52.161 56.5553 52.0309 56.5553 51.8995L56.5553 28.8584L27.1503 58.2634C26.9628 58.451 26.7084 58.5563 26.4432 58.5563C26.178 58.5563 25.9236 58.451 25.7361 58.2634C25.5485 58.0759 25.4432 57.8215 25.4432 57.5563C25.4432 57.2911 25.5485 57.0367 25.7361 56.8492L55.1411 27.4442L32.1 27.4442C31.9686 27.4442 31.8385 27.4183 31.7171 27.368C31.5958 27.3177 31.4855 27.244 31.3925 27.1511C31.2996 27.0582 31.2259 26.9479 31.1756 26.8265C31.1254 26.7051 31.0995 26.575 31.0995 26.4436C31.0995 26.3122 31.1254 26.1821 31.1756 26.0607C31.2259 25.9393 31.2996 25.829 31.3925 25.7361C31.4855 25.6432 31.5958 25.5695 31.7171 25.5192C31.8385 25.4689 31.9686 25.4431 32.1 25.4431L57.5559 25.4431C57.6873 25.443 57.8174 25.4688 57.9389 25.5191C58.0603 25.5693 58.1706 25.643 58.2635 25.736C58.3565 25.8289 58.4302 25.9392 58.4804 26.0606C58.5307 26.1821 58.5565 26.3122 58.5564 26.4436L58.5564 51.8995C58.5565 52.0309 58.5307 52.161 58.4804 52.2824C58.4302 52.4039 58.3565 52.5142 58.2635 52.6071C58.1706 52.7 58.0603 52.7737 57.9389 52.824C57.8174 52.8743 57.6873 52.9001 57.5559 52.9Z"
                      fill="#F8F8F8"
                      className="group-hover:fill-accentBlue transition"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-5/12 project-cards relative h-80 pt-[16rem] md:pt-[18rem] xxl:pt-[32.5rem]">
            <div className="relative">
              <ProjectCard
                header="My Role"
                paragraph="Sole Engineer"
                key="role"
              />
              <ProjectCard
                header="Background"
                paragraph="Sole Engineer"
                key="bg"
              />
              <ProjectCard
                header="Tech Stack"
                list={true}
                listItems={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Tailwind",
                  "Axios",
                ]}
                key="list"
              />
              <ProjectCard
                header="Sneak Peek"
                image="/src/assets/homepage.jpg"
                key="peek"
              />
              <ProjectCard
                header="Reflections"
                paragraph="Sole Engineer"
                key="closing"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-svh md:h-screen bg-white/20 flex items-end pb-28 px-6 md:px-16 lg:px-36 xl:px-60"
        id="contact"
      >
        <div className="w-full p-4 md:w-9/12 space-y-4 rounded-xl glass-bg">
          <h1 className="text-white font-inter font-bold text-5xl md:text-6xl xl:text-7xl">
            Contact
          </h1>
          <p className="text-white font-inconsolata md:text-xl xl:text-2xl font-bold">
            Reach out to me via:
          </p>
          <div className="space-y-3 pt-36">
            <ContactButton text="GitHub" url="https://github.com/kane-chang" />
            <ContactButton
              text="LinkedIn"
              url="https://www.linkedin.com/in/kane-chang/"
            />
            <ContactButton
              text="kane.chang.fl@gmail.com"
              url="mailto:kane.chang.fl@gmail.com"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
