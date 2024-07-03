import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";
import ContactButton from "../components/ContactButton";
import ProjectCard from "../components/ProjectCard";
import AboutCard from "../components/AboutCard";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Home = () => {
  useGSAP(() => {
    /*  Scroll down animation */
    let startAnimationTl = gsap.timeline();

    startAnimationTl.fromTo(
      ".cursor",
      { opacity: 1 },
      { opacity: 0, repeat: 6, ease: "power4.inOut", duration: 0.5 }
    );
    startAnimationTl
      .to(
        ".name-header",
        {
          text: ".kane-chang",
          duration: 1.8,
          ease: "power3.in",
        },
        0.2
      )
      .from(".subheader", { opacity: 0, x: -50, duration: 1 }, 2)
      .from(".scrollDown", {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.2,
      })
      .to("#scrollDownIcon", { y: 6, yoyo: true, repeat: -1 });

    /** Pins gradientBg throughout homepage */
    gsap.to("#gradientBg", {
      scrollTrigger: {
        trigger: "#gradientBg",
        start: "top top",
        endTrigger: "#contact",
        end: "bottom top",
        pin: ".gradient-container",
        pinSpacing: false,
        // markers: true,
      },
    });

    let t0 = gsap.timeline({
      scrollTrigger: {
        trigger: "#gradientBg",
        start: "10% top",
        // markers: true,
        scrub: true,
      },
    });

    t0.to("#scrollDown", { opacity: 0 }).to("#gradientBg", {
      "--color1": "255,160,0",
      immediateRender: false,
    });

    gsap.to("#gradientBg", {
      scrollTrigger: {
        trigger: "#projectOne",
        start: "top 80%",
        // markers: true,
        scrub: true,
      },
      "--color1": "92,107,192",
      immediateRender: false,
    });
    gsap.to("#gradientBg", {
      scrollTrigger: {
        trigger: "#project-spacer-three",
        start: "top 80%",
        // markers: true,
        scrub: true,
      },
      "--color1": "198,255,0",
      immediateRender: false,
    });

    /** about section animation */
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-header",
        pin: "#about", // pin the trigger element while active
        pinSpacing: false,
        start: "top 15%", // when the top of the trigger hits the top of the viewport
        endTrigger: "#about-spacer",
        // markers: true,
        end: "20% top", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
        anticipatePin: 1,
      },
    });

    t1.addLabel("cardOne")
      .from(".about-card", { opacity: 0, xPercent: 100, stagger: 0.8 })
      .addLabel("end");

    /** Project One: stacked project cards animation */
    let t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectOne",
        // markers: true,
        start: "top 10%",
        endTrigger: "#project-spacer",
        end: "40% top",
        scrub: 0.5,
        pin: "#projectOne",
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    t3.addLabel("projCardAnimation")
      .from(".project-card", {
        yPercent: 200,
        stagger: 0.5,
      })
      .addLabel("end");

    /** Project Two: stacked project cards animation */
    let t4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectTwo",
        // markers: true,
        start: "top 10%",
        endTrigger: "#project-spacer-two",
        end: "40% top",
        scrub: 0.5,
        pin: "#projectTwo",
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    t4.addLabel("projCardAnimationTwo")
      .from(".project-card-two", {
        yPercent: 200,
        stagger: 0.5,
      })
      .addLabel("end");

    /** Project Three: stacked project cards animation */
    let t5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectThree",
        // markers: true,
        start: "top 10%",
        endTrigger: "#project-spacer-three",
        end: "40% top",
        scrub: 0.5,
        pin: "#projectThree",
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    t5.addLabel("projCardAnimation")
      .from(".project-card-three", {
        yPercent: 200,
        stagger: 0.5,
      })
      .addLabel("end");
  });

  return (
    <>
      {/* Gradient Div */}
      <div
        className="h-svh w-svw md:h-screen md:w-screen absolute overflow-hidden top-0 left-0 bg-black -z-10 transition"
        id="gradientBg"
      >
        <div className="gradient-container h-full w-full">
          <div className="g1 absolute animate-vert"></div>
          <div className="g2 absolute animate-circle-reverse"></div>
          <div className="g3 absolute animate-circle-linear"></div>
          <div className="g4 absolute animate-horizontal"></div>
          <div className="g5 absolute animate-circle-ease"></div>
        </div>
      </div>

      {/* Hero Section - Name and Role */}
      <div
        className="h-svh md:h-screen flex flex-col justify-end px-6 md:px-16 lg:px-36 xl:px-60"
        id="hero"
      >
        <div>
          <h1 className="font-inter text-5xl md:text-6xl xl:text-7xl overflow-hidden whitespace-nowrap h-full">
            <span className="text-accentOrange name-header font-bold"></span>
            <span className="cursor text-white font-inter font-thin">|</span>
          </h1>
          <p className="text-white font-inconsolata text-xl md:text-2xl xl:text-3xl font-bold subheader">
            Frontend Developer
          </p>
        </div>
        <div
          className="flex flex-col items-center mt-[35vh] pb-8 xl:pb-10"
          id="scrollDown"
        >
          <p className="font-inconsolata scrollDown" id="scrollDownText">
            Scroll Down
          </p>
          <i
            className="fa-solid fa-chevron-down scrollDown"
            id="scrollDownIcon"
          ></i>
        </div>
      </div>

      {/* About Section - Description and AboutCards */}
      <div
        className="h-[150svh] md:h-screen flex flex-col justify-center overflow-hidden px-6 md:px-16 lg:px-36 xl:px-60 space-y-8 md:space-y-16"
        id="about"
      >
        <div className="space-y-4">
          <h1
            className="text-accentOrange font-inter font-bold text-5xl md:text-6xl xl:text-7xl"
            id="about-header"
          >
            This is <span className="text-accentOrange">me.</span>
          </h1>
          <p className="text-white font-inconsolata text-xl md:text-2xl xl:text-3xl">
            I am a <span className="text-accentGreen">Frontend Developer</span>,
            <br className="hidden md:block"></br>proficient in modern frontend
            technologies such as React and TypeScript, with track record of high
            performance and proactiveness in ambiguous and fast-paced
            environments
          </p>
        </div>
        <div className="about-cards space-y-2 md:space-x-6 flex flex-col md:flex-row items-center">
          <AboutCard
            header="Characteristics"
            paragraph="Adaptable and analytical frontend developer from philosophy background, with a love for logic and learning"
            tagOne="Personality"
            tagTwo="Story"
            iconImg="/smile.svg"
            imgAlt="Smile Icon"
            id="char"
            hFull={true}
          />
          <AboutCard
            header="Technical Skills"
            paragraph="HTML5, CSS3, JavaScript, TypeScript, React, Tailwind, Jest, jQuery, Node.js, Next.js Python & more"
            tagOne="Skills"
            tagTwo="Tech"
            iconImg="/gear.svg"
            imgAlt="Gear Icon"
            id="tech"
            hFull={true}
          />
          <AboutCard
            header="Soft Skills"
            paragraph="Strong work ethic, proactive self-starter. Open and empathetic communicator"
            tagOne="Skills"
            tagTwo="People"
            iconImg="/chat.svg"
            imgAlt="Chat Icon"
            id="soft"
            hFull={true}
          />
        </div>
      </div>

      <div className="spacer h-[200svh] md:h-screen" id="about-spacer"></div>

      {/* Background Section - 3 Background Bullets  */}
      {/* <div
        className="opacity-0 h-lvh md:h-screen flex items-center px-6 md:px-16 lg:px-36 xl:px-60 bg-[url('./assets/sgbg_mobile.png')] md:bg-[url('./assets/sgbg_tablet.png')] lg:bg-[url('./assets/sgbg.png')] xl:bg-[url('./assets/sgbg_xl.png')] bg-center bg-cover bg-no-repeat"
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
      </div> */}

      <div className="spacer h-[50svh] md:h-[50vh]" id="ghibli-spacer"></div>

      {/* Projects Section  */}
      {/* project one - smarkets */}
      <div
        className="h-svh md:h-screen flex flex-col px-6 md:px-16 lg:px-36 xl:px-60"
        id="projectOne"
      >
        <h1 className="text-white font-inter font-bold text-4xl md:text-5xl xl:text-6xl pb-2 md:pb-8">
          Projects
        </h1>
        <div className="flex h-full">
          <div className="w-full flex flex-col lg:flex-row relative project-container">
            <div className="w-full lg:w-7/12 p-4 space-y-4 rounded-xl glass-bg md:pb-8 md:p-7 ">
              <img
                className="w-[45%]"
                src="https://smarkets.com/static/assets/smarkets-logo.33cf24e1279443342527.svg"
                alt="Smarkets Logo"
              />
              <p className="font-inconsolata md:text-xl xl:text-2xl text-white ">
                A Smarkets Betting Exchange clone using Next.js, React and
                Typescript
                <span className="hidden md:inline">
                  {
                    " leveraging 4 API endpoints (Events, Markets, Contracts and Prices) from Smarkets API."
                  }
                </span>
              </p>
              <div className="hidden pb-4 lg:block">
                <img
                  className="max-w-full max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] rounded-2xl "
                  src="/smarkets-preview.webp"
                  alt="Smarkets Web App homepage live updated betting exchange information and events."
                />
              </div>
              <div className="flex group">
                <a
                  className="font-inter text-lg self-center border rounded-3xl text-xl md:text-2xl xl:text-4xl px-6 py-1 group-hover:text-accentGreen group-hover:border-accentGreen transition"
                  href="https://smarkets-lemon.vercel.app/"
                  target="_blank"
                >
                  View
                </a>
                <a
                  className="border rounded-full group group-hover:text-accentGreen group-hover:border-accentGreen group-hover:rotate-45 transition"
                  href="https://smarkets-lemon.vercel.app/"
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
                        className="group-hover:fill-accentGreen transition"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-5/12 project-cards relative h-80">
              <div className="relative">
                <ProjectCard
                  header="Goals"
                  cardClass="project-card"
                  paragraph="A 6-hour challenge to build a web app retrieving real-time info:"
                  paragraph2=" "
                  list={true}
                  listItems={[
                    "Modular and flexible code structure that can scale quickly",
                    "Replicate the unique feel of Smarkets - brand fonts, colours and UI design",
                  ]}
                  key="bg"
                />
                <ProjectCard
                  header="Tech Stack"
                  cardClass="project-card"
                  list={true}
                  listItems={[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "date-fns",
                  ]}
                  key="list"
                />
                <ProjectCard
                  header="Challenges"
                  cardClass="project-card"
                  paragraph="API Rate Limits on Requests & Dependent Data Fetches"
                  paragraphResponsive="With a limit of 20 requests/min, I had to get creative with my data fetching optimisations"
                  paragraph2="Technical solutions:"
                  list
                  listItems={[
                    "Reduce any unnecessary requests",
                    "Maximise parallel fetch calls",
                    "Data Streaming optimisations using Suspense",
                  ]}
                  key="role"
                />
                <ProjectCard
                  header="Improvements"
                  cardClass="project-card"
                  paragraph="Given more time, some key improvements I would make are:"
                  paragraph2=" "
                  list
                  listItems={[
                    "Create event sub-categories",
                    "Improve mobile responsiveness",
                    "Build feature page to showcase most popular markets",
                  ]}
                  key="closing"
                />
                <ProjectCard
                  header="Preview"
                  cardClass="project-card lg:hidden"
                  image="/smarkets-preview.webp"
                  alt="Smarkets Web App homepage live updated betting exchange information and events."
                  key="preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer h-[300svh] md:h-[230vh]" id="project-spacer"></div>

      {/* project two - gamesync */}
      <div
        className="h-svh md:h-screen flex flex-col px-6 md:px-16 lg:px-36 xl:px-60"
        id="projectTwo"
      >
        <div className="flex h-full">
          <div className="w-full flex flex-col-reverse lg:flex-row relative project-container">
            <div className="w-full lg:w-5/12 project-cards relative h-[100svh] md:h-[100vh] lg:h-80">
              <div className="relative">
                <ProjectCard
                  header="Problem"
                  cardClass="project-card-two"
                  paragraph="Scheduling gaming sessions for busy adults is a challenge and no gaming-specific schedulers currently exist. "
                  paragraph2="How can we make gaming with friends as easy as possible?"
                  key="bg"
                />
                <ProjectCard
                  header="Responsibilities"
                  cardClass="project-card-two"
                  paragraph="Front-end Web Developer and Team Lead"
                  paragraph2="Led the implementation of dynamic scheduler, local storage integration and summary page. Collaborated closely with three other web developers."
                  key="role"
                />
                <ProjectCard
                  header="Tech Stack"
                  cardClass="project-card-two"
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
                  header="Reflections"
                  cardClass="project-card-two"
                  paragraph="While this product is currently at MVP stage, more features such as adding multiple players, improving game search and building a back-end for remote calendar are still being developed!"
                  key="closing"
                />
                <ProjectCard
                  header="Preview"
                  cardClass="project-card-two lg:hidden"
                  image="/homepage.webp"
                  alt="GameSync Web App homepage with input fields for squad name and game selection."
                  key="preview"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12 p-4 space-y-4 rounded-xl glass-bg md:pb-8 md:p-7">
              <img className="w-[45%]" src="/gamesync_logo.webp" alt="" />
              <p className="font-inconsolata md:text-xl xl:text-2xl text-white ">
                A streamlined and intuitive scheduler tailored for busy gamers,
                by gamers.{" "}
                <span className="hidden md:inline">
                  Estimate completion dates, share your calendars and conquer
                  levels together!
                </span>
              </p>
              <div className="hidden pb-4 lg:block">
                <img
                  className="max-w-full max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] rounded-2xl "
                  src="/homepage.webp"
                  alt="GameSync Web App homepage with input fields for squad name and game selection."
                />
              </div>
              <div className="flex group">
                <a
                  className="font-inter text-lg self-center border rounded-3xl text-xl md:text-2xl xl:text-4xl px-6 py-1 group-hover:text-accentGreen group-hover:border-accentGreen transition"
                  href="https://gamesync-game-session-scheduler.netlify.app/"
                  target="_blank"
                >
                  View
                </a>
                <a
                  className="border rounded-full group group-hover:text-accentGreen group-hover:border-accentGreen group-hover:rotate-45 transition"
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
                        className="group-hover:fill-accentGreen transition"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="spacer h-[300svh] md:h-[230vh]"
        id="project-spacer-two"
      ></div>

      {/* project three - butterpal */}
      <div
        className="h-svh md:h-screen flex flex-col px-6 md:px-16 lg:px-36 xl:px-60"
        id="projectThree"
      >
        <div className="flex h-full">
          <div className="w-full flex flex-col lg:flex-row relative project-container">
            <div className="w-full lg:w-7/12 p-4 space-y-4 rounded-xl glass-bg md:pb-8 md:p-7">
              <h2 className="font-inter font-bold text-4xl md:text-5xl xl:text-6xl">
                ButterPal
              </h2>
              <p className="font-inconsolata md:text-xl xl:text-2xl text-white">
                An innovative, high-performance mobile app built to connect
                neighbours and crowdsource local grocery runs for IOS and
                Android.
              </p>
              <div className="hidden pb-4 lg:block">
                <img
                  className="max-w-full max-h-[20vh] md:max-h-[30vh] lg:max-h-[40vh] rounded-2xl "
                  src="/butterpal.webp"
                  alt="ButterPal App screens of the homepage, login flows and request boards."
                />
              </div>
              <div className="flex group">
                <a
                  className="font-inter text-lg self-center border rounded-3xl text-xl md:text-3xl xl:text-4xl px-6 py-1 group-hover:text-accentGreen group-hover:border-accentGreen transition"
                  href="https://github.com/kane-chang/ButterPal"
                  target="_blank"
                >
                  View
                </a>
                <a
                  className="border rounded-full group group-hover:text-accentGreen group-hover:border-accentGreen group-hover:rotate-45 transition"
                  href="https://github.com/kane-chang/ButterPal"
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
                        className="group-hover:fill-accentGreen transition"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-5/12 project-cards relative h-80">
              <div className="relative">
                <ProjectCard
                  header="Problem"
                  cardClass="project-card-three"
                  paragraph="Grocery runs are time-consuming and frustrating, especially for just an item or two. "
                  paragraph2="How can we save time on troublesome grocery shopping while building our local community?"
                  key="bg"
                />
                <ProjectCard
                  header="Responsibilities"
                  cardClass="project-card-three"
                  paragraph="Fullstack Mobile Developer"
                  paragraph2="Developed mobile application from end-to-end, collaborating closely with UX Designer to bring pixel-perfect user interfaces to life"
                  key="role"
                />
                <ProjectCard
                  header="Tech Stack"
                  cardClass="project-card-three"
                  list={true}
                  listItems={[
                    "React Native",
                    "TypeScript",
                    "Supabase",
                    "PostgreSQL",
                    "RESTful API",
                    "IOS",
                    "Android",
                  ]}
                  key="list"
                />
                <ProjectCard
                  header="Reflections"
                  cardClass="project-card-three"
                  paragraph="I am proud to have built ButterPal as a way for me to refine my skills in React Native and expand my tech stack"
                  paragraph2="It is currently in testing phase and will soon be launched"
                  key="closing"
                />
                <ProjectCard
                  header="Preview"
                  cardClass="project-card-three lg:hidden"
                  image="/butterpal.webp"
                  alt="ButterPal App screens of the homepage, login flows and request boards."
                  key="preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="spacer h-[300svh] md:h-[230vh]"
        id="project-spacer-three"
      ></div>

      {/* Contact Section */}
      <div
        className="h-svh md:h-screen flex items-end pb-6 px-6 md:px-16 lg:px-36 xl:px-60"
        id="contact"
      >
        <div
          className="w-full p-4 md:w-9/12 space-y-4 rounded-xl glass-bg"
          id="contact-container"
        >
          <h1 className="text-white font-inter font-bold text-5xl md:text-6xl xl:text-7xl">
            Contact
          </h1>
          <p className="text-white font-inconsolata text-lg md:text-xl xl:text-2xl font-bold">
            For any inquiries, collaborations or opportunities, I can be reached
            via these channels!
          </p>
          <div className="space-y-3 pt-36">
            <ContactButton text="Email" url="mailto:kane.chang.fl@gmail.com" />
            <ContactButton text="GitHub" url="https://github.com/kane-chang" />
            <ContactButton
              text="LinkedIn"
              url="https://www.linkedin.com/in/kane-chang/"
            />
          </div>
        </div>
      </div>

      {/* Footer Section  */}
      <div className="flex items-center justify-center">
        <h3 className="font-inconsolata text-sm pb-6">
          Made with 🤍 by Kane Chang • 2024
        </h3>
      </div>
    </>
  );
};

export default Home;
