import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>&copy;Copyright. All rights reserved.
        </small>
        <p className='text-xs'>
            About this website:<span className='font-semibold'>built with React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS, Framer Motion , React Email & Resend , Vercel hosting </span>
        </p>
    </footer>
  )
}
