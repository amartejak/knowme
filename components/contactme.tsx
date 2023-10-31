import React from 'react';
import {
	Logo,
	TwitterIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	SearchIcon,
} from "@/components/icons";

export const ContactMe: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-3">
        <hr className="my-4 border-default-200 w-full" />
        <h2 className="text-4xl font-semibold text-inherit mb-4">Contact Me</h2>
        <div className="text-center mt-4 mb-4">
            <div className="flex space-x-4">
            <a
                href="https://twitter.com/YourTwitterHandle"
                className="flex text-inherit font-medium px-4 py-2 rounded-full hover:bg-blue-500"
            >
                <TwitterIcon className='fill-gray-100 '/>   Twitter
            </a>
            <a
                href="https://linkedin.com/in/YourLinkedInProfile"
                className="text-inherit font-medium px-4 py-2 rounded-full hover:bg-indigo-600"
            >
                LinkedIn
            </a>
            <a
                href="https://github.com/YourGitHubProfile"
                className="text-inherit font-medium px-4 py-2 rounded-full hover:bg-gray-900"
            >
                Github
            </a>
            <a
                href="https://github.com/YourGitHubProfile"
                className="text-inherit font-medium px-4 py-2 rounded-full hover:bg-gray-900"
            >
                Instagram
            </a>
            <a
                href="mailto:amarteja2@gmail.com"
                className="text-inherit font-medium px-4 py-2 rounded-full hover:bg-gray-900"
            >
                📧 Email
            </a>           
            </div>
        </div>
    </div>							

  );
};

