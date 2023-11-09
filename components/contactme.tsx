"use client";
import React from 'react';
import {
	Logo,
	TwitterIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	ArrowIcon,
    EmailIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

export const ContactMe: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <div className="w-full flex flex-col items-center justify-center py-3">
		<button title='navigate to top' type='button' onClick={scrollToTop} className="border dark:bg-black border-gray-700 shadow-md dark:shadow-gray-400/50 shadow-gray-700/50 rounded-full animate-bounce">
        <ArrowIcon size={30} />
        </button>
        <hr className="my-4 border-default-200 w-full" />
        <h2 id="contact" className="text-4xl font-semibold text-inherit mb-4">Contact Me</h2>
        <div className="text-center mt-4 mb-4">
            <div className="flex max-lg:flex-col">
            <a
                href={siteConfig.links.email}
                target="_blank"
                className="flex items-center text-inherit font-medium px-4 py-2 gap-2 rounded-full hover:border hover:border-gray-700 hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-600/50">
                <EmailIcon className='mr-1'/>Email
            </a>   
            <a
                href={siteConfig.links.linkedin}
                target="_blank"
                className="flex items-center text-inherit font-medium px-4 py-2 gap-2 rounded-full hover:bg-sky-700 hover:border hover:border-gray-700 hover:shadow-lg hover:shadow-sky-700/50"
            >
                <LinkedinIcon className=''/>LinkedIn
            </a>
            <a
                href={siteConfig.links.github}
                target="_blank"
                className="flex items-center text-inherit hover:text-white font-medium px-4 py-2 gap-2 rounded-full hover:bg-black hover:border hover:border-gray-700 hover:shadow-lg hover:shadow-gray-700/50"
            >
                <GithubIcon className='mr-1'/>Github
            </a>
            <a
                href={siteConfig.links.twitter}
                target="_blank"
                className="flex items-center text-inherit font-medium px-4 py-2 gap-2 rounded-full hover:bg-blue-500 hover:border hover:border-gray-700 hover:shadow-lg hover:shadow-blue-500/50 "
            >
                <TwitterIcon className='mr-1'/>Twitter
            </a>
          
            <a
                href={siteConfig.links.instagram}
                target="_blank"
                className="flex items-center text-inherit font-medium px-4 py-2 gap-2 rounded-full hover:border hover:border-gray-700 hover:bg-gradient-to-bl from-pink-600 to-orange-400 hover:shadow-lg hover:shadow-orange-400/50"
            >
                <InstagramIcon className='mr-1'/>Instagram
            </a>
                    
            </div>
        </div>
    </div>							

  );
};

