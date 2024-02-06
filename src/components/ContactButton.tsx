import React from 'react'

interface ContactButtonProps {
  text: string;
  url: string;
}

const ContactButton = ({text, url} : ContactButtonProps) => {
  return (
    <div className="flex space-x-3">
    <a className="font-inter border rounded-3xl text-xl px-7 py-1 hover:text-accentGreen hover:border-accentGreen transition" href={url}>
      {text}
    </a>
  </div>
  )
}

export default ContactButton