import React from "react";

interface ContactButtonProps {
  text: string;
  url: string;
}

const ContactButton = ({ text, url }: ContactButtonProps) => {
  return (
    <div className="flex group">
      <a
        className="font-inter self-center text-lg border rounded-3xl lg:text-3xl xl:text-4xl px-6 py-1 group-hover:text-accentGreen group-hover:border-accentGreen transition"
        href={url}
        target="_blank"
      >
        {text}
      </a>
      <a
        className="border rounded-full group group-hover:text-accentGreen group-hover:border-accentGreen group-hover:rotate-45 transition"
        href={url}
        target="_blank"
      >
        <svg
          className="w-9 md:w-12 xl:w-12"
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
  );
};

export default ContactButton;
