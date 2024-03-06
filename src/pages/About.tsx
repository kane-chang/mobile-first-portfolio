import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";
import AboutCard from "../components/AboutCard";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const About = () => {
  useGSAP(() => {
    /**gradientBg fade in animation */
    let startAboutTl = gsap.timeline();
    startAboutTl.to("#gradientBg2", {
      "--color1": "171,71,188",
      duration: 4,
      ease: "power1.out",
    });

    /** Pins gradientBg throughout about page */
    gsap.to("#gradientBg2", {
      scrollTrigger: {
        trigger: "#gradientBg2",
        start: "top top",
        endTrigger: "#endBg",
        end: "bottom top",
        pin: ".gradient-container",
        pinSpacing: false,
        // markers: true,
      },
    });
  });
  return (
    <>
      <div
        className="h-svh w-svw md:h-screen md:w-screen absolute overflow-hidden top-0 left-0 bg-black -z-10 transition"
        id="gradientBg2"
      >
        <div className="gradient-container h-full w-full">
          <div className="g1 absolute animate-vert"></div>
          <div className="g2 absolute animate-circle-reverse"></div>
          <div className="g3 absolute animate-circle-linear"></div>
          <div className="g4 absolute animate-horizontal"></div>
          <div className="g5 absolute animate-circle-ease"></div>
        </div>
      </div>
      <div
        className="h-svh md:h-screen flex flex-col pt-20 xxl:pt-36 px-6 md:px-16 lg:px-36 xl:px-60"
        id="aboutKane"
      >
        <h1 className="font-inter font-bold text-4xl md:text-5xl xl:text-6xl pb-6 lg:pb-8">
          about&#40;<span className="text-accentGreen">kane</span>&#41;
        </h1>
        <div className="flex flex-col space-y-6 md:space-y-0 md:space-x-6 md:flex-row">
          <div id="kane-photo" className="">
            <img
              className="pb-2 object-contain max-h-[50svh] rounded-xl"
              src="/kane_photo.jpg"
              alt="photo of kane standing in front of a river and bridge"
            />
            <p className="font-inconsolata text-md md:text-lg xl:text-xl">
              they/them
            </p>
          </div>
          <div id="kane-info" className="md:w-3/4">
            <p className="font-inconsolata md:text-xl xxl:text-2xl">
              Web developer heavily influenced by storytelling and philosophy.
              Addicted to traveling, visual arts, and nerdy games.{" "}
              <br className="md:hidden"></br>
              <br className="md:hidden"></br>I see myself as a craftsperson in
              the vast space of the internet, creating stunning constructions
              lasting potentially for an eternity or an instant.
            </p>
            <br></br>
            <p className="font-inconsolata md:text-xl xl:text-2xl">
              From Singapore, based in London.
            </p>
            <p className="font-inconsolata text-sm xl:text-xl">You can view my cv <a className="text-accentGreen hover:text-accentGreen/70 transition" href="https://drive.google.com/file/d/1tC2l8JGctKf1myJKMnhQVQFyUexpRQZn/view"
            target="_blank">here</a>.</p>
            <br></br>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 pb-16 aboutPageCards md:hidden xl:flex">
              <AboutCard
                header="Serious stuff"
                list={true}
                listItems={[
                  "HTML & CSS",
                  "JavaScript / Typescript",
                  "React / Angular",
                  "Tailwind / Bootstrap",
                  "Node.js & Axios",
                  "...& more!",
                ]}
                tagOne="Hard"
                tagTwo="Tech"
                iconImg="/gear.svg"
                imgAlt="Gear Icon"
                id="serious"
                hFull={false}
              />
              <AboutCard
                header="The human side"
                list={true}
                listItems={[
                  "Feedback = Growth",
                  "Not a mindless coder",
                  "Honest communication => Great teams",
                  "Talk to me about work, but also about your life",
                ]}
                tagOne="Soft"
                tagTwo="People"
                iconImg="/chat.svg"
                imgAlt="Chat Icon"
                id="human"
                hFull={false}
              />
              <AboutCard
                header="When not coding..."
                list={true}
                listItems={[
                  "I eat hotpot ",
                  "I read about backend development",
                  "I play tabletop games with friends",
                  "I travel and see the world through my lens",
                ]}
                tagOne="Interests"
                tagTwo="Fun!"
                iconImg="/smile.svg"
                imgAlt="Smile Icon"
                id="soft"
                hFull={false}
              />
            </div>
            <div id="endBg" className=""></div>
          </div>
        </div>
        <div className="md:flex-row space-y-6 md:space-y-0 md:space-x-4 pb-16 aboutPageCards pt-6 hidden md:flex xl:hidden">
          <AboutCard
            header="Serious stuff"
            list={true}
            listItems={[
              "HTML & CSS",
              "JavaScript / Typescript",
              "React / Angular",
              "Tailwind / Bootstrap",
              "Node.js & Axios",
              "...& more!",
            ]}
            tagOne="Hard"
            tagTwo="Tech"
            iconImg="/gear.svg"
            imgAlt="Gear Icon"
            id="serious"
            hFull={true}
          />
          <AboutCard
            header="The human side"
            list={true}
            listItems={[
              "Feedback = Growth",
              "Not a mindless coder",
              "Honest communication => Great teams",
              "Talk to me about work, but also about your life",
            ]}
            tagOne="Soft"
            tagTwo="People"
            iconImg="/chat.svg"
            imgAlt="Chat Icon"
            id="human"
            hFull={true}
          />
          <AboutCard
            header="When not coding..."
            list={true}
            listItems={[
              "I eat hotpot ",
              "I read about backend development",
              "I play tabletop games with friends",
              "I travel and see the world through my lens",
            ]}
            tagOne="Interests"
            tagTwo="Fun!"
            iconImg="/smile.svg"
            imgAlt="Smile Icon"
            id="soft"
            hFull={true}
          />
        </div>
      </div>
    </>
  );
};

export default About;
