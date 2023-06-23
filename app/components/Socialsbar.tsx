'use client';
import {TbBrandGithub} from 'react-icons/tb'
import {SlSocialFacebook, SlSocialInstagram, SlSocialTwitter} from 'react-icons/sl'

const Socialsbar = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className='flex flex-col gap-4'>
        <a href="https://github.com/bug-dbg" target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <TbBrandGithub/>
          </span>
        </a>
        <a href="https://www.facebook.com/Mr.acts" target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialFacebook/>
          </span>
        </a>
        <a href="https://www.instagram.com/mr.acts/" target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialInstagram/>
          </span>
        </a>
        <a href="https://twitter.com/earn_acts" target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialTwitter/>
          </span>
        </a>
      </div>
      {/* line div */}
      <div className="w-[2px] h-40 bg-textDark"/>
    </div>
  )
}

export default Socialsbar