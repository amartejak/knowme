import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
	size = 36,
	width,
	height,
	...props
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="36"
		height="36"
		version="1"
		viewBox="0 0 300 300"
		{...props}
		>
		<path
		d="M2986 4816c-12-14-50-93-86-176-70-160-148-334-242-534-32-68-58-129-58-134 0-6-40-93-90-194-114-232-115-228 45-155 74 33 254 109 400 169 145 60 331 139 413 177l149 68-138 306c-222 492-218 486-301 493-41 3-80-5-92-20zm134-277c0-12 11-15 24-7 13 9 3-14-23-50-25-36-67-75-93-86-26-12-42-29-37-37 12-21 69-11 86 14 18 27 100 47 113 27 5-8-4-27-21-41-56-46-80-108-36-90 128 50 144 3 34-100l-73-69 96 13c71 10 92 7 82-10-8-13-26-23-39-23-14 0-36-11-49-24-29-29-84-39-84-14 0 10 16 19 35 19 25 1 21 7-13 21-39 16-58 10-100-28-84-75-189-147-237-162-69-22-58 43 15 84 33 19 60 41 60 49 0 15 74 95 88 95s132 115 132 129c0 7-70-40-155-104-208-158-211-159-182-97 12 28 31 46 40 40s17-2 17 8 21 41 47 69c104 113 173 247 77 151-19-19-29-19-44 0-11 13-15 20-8 15s54 44 105 109c86 110 143 149 143 99zM3445 3791c-79-38-227-100-329-139-198-74-644-264-752-320-63-33-166-197-140-223 6-6 64 11 129 38 183 77 538 187 747 233 287 62 608 143 622 158 7 6-20 82-60 167l-72 155-145-69zM3590 3290c-99-26-232-57-295-70-142-28-145-1 36-363 83-166 147-313 142-328-8-19-110-27-427-33-466-9-662-53-1054-234-198-92-171-50-424-636-108-250-128-236 339-236h397l117 250c160 341 111 318 695 321l486 3 58-117c32-64 93-193 136-287l77-170 379 5c208 3 389 5 403 5 53 0 39 39-230 610-78 165-193 417-256 560s-162 357-220 475-102 215-97 215 0 18-12 40c-26 48-24 48-250-10zm210-94c0-79-388-375-433-330-24 24 38 175 88 215 124 97 345 171 345 115zm62-221c1-25 3-72 5-105s14-72 28-86c66-70-30-248-243-451-205-196-395-292-450-226-14 17-38 26-53 20s-43 4-61 23c-23 22-48 28-76 19-23-8-91-14-152-13-64 1-115-8-124-22-12-18-15-18-16 1 0 14-10 25-21 25-12 0-16-9-9-20 7-12-2-14-23-6s-26 16-11 21c13 5 24 17 24 28s-54-10-120-46c-66-37-120-74-120-83s7-12 16-6c9 5 8-40-3-100l-20-111-240-173c-132-96-252-181-266-190-17-10-42 3-70 36-47 53-66 110-37 110 9 0 56 38 103 84 93 88 55 73-111-48-123-89-143-69-52 54 45 61 72 110 60 110-29 0 26 103 100 187 32 37 54 72 48 78s0 18 14 26c15 10 19 7 10-8-22-35 59-28 88 7 25 31 81 60 228 119 108 44 109 28 2-51-125-93-218-178-195-178 11 0 42 20 70 45 94 83 225 165 252 159 15-4 22 2 15 13-13 20 146 92 164 74 6-6 21-1 35 10 33 28 229 45 229 21 0-11-16-29-35-40-29-17-30-21-4-21 17-1 43 10 58 24 16 15 22 16 14 2-7-12 0-33 16-46 23-19 26-15 16 23-6 25-4 40 5 32 8-8 43-3 78 12 39 16 80 20 107 10 32-12 66-4 120 27 64 37 71 38 46 7-16-20-78-64-136-97-59-33-103-64-97-69 5-5 50 14 100 44 50 29 101 47 114 38 15-9 19-6 10 9-12 19 3 28 33 22 114-24 300 199 230 275l-41 45 81 88c45 49 115 139 156 201 81 121 108 137 111 67zm127-437c-5-8 26-31 70-53l78-38-44-86c-55-110-234-274-363-334l-100-46-17 45c-42 108 21 283 93 259 10-4 11 3 4 15-7 11-2 20 10 20s17 9 10 20c-11 18 16 29 56 22 10-2 12 6 5 16-6 11 2 27 18 36 17 10 33 42 35 72 4 42 13 51 40 43 20-7 36-4 36 5 0 10 17 17 39 17 21 0 34-6 30-13zm211-354c0-27-125-137-195-172-123-62-164-73-152-41 6 16 17 29 25 29 7 0 41 25 75 57 143 130 247 184 247 127zm118-280c-3-41-1-84 5-95 5-10 9-41 9-69-1-27 6-56 15-63 10-6 11-32 3-57-11-34-19-38-31-19-12 20-22 21-44 3-21-17-34-17-51 0s-32 16-59-7c-38-32-40-32-149-10-55 11-71 22-63 45 7 16 4 27-6 24-23-8-127 74-127 100 0 11 70 44 155 73 85 28 191 73 235 99 108 65 114 64 108-24zm-2032-352c-36-47-159-106-180-85-11 12 170 133 199 133 9 0 1-21-19-48z"
		transform="matrix(.05 0 0 -.05 0 300)"
		fill="currentColor"
		/>
		<path
		d="M2650 3051c-253-86-439-159-520-205-42-23-204-358-184-379 7-6 89 22 184 62 95 41 286 103 425 138l252 64 86 189c46 105 85 197 86 205 2 30-74 13-329-74z"
		transform="matrix(.05 0 0 -.05 0 300)"
		fill="currentColor"
		/>
	</svg>);

export const InstagramIcon: React.FC<IconSvgProps> = ({
	size = 22,
	width,
	height,
	...props
}) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg"
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			fill="none" stroke="currentColor"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			{...props}
		>
			
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path
				d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
			/>
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>

	);
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 22 22"
			width={size || width}
			{...props}
		>
			<path
				d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const GithubIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 22 22"
			width={size || width}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
				fill="currentColor"
				stroke="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const LinkedinIcon: React.FC<IconSvgProps> = ({
	size = 28,
	width,
	height,
	...props
}) => {
	return (
		<svg 
			height={size || height}
			viewBox="0 0 22 22"
			width={size || width}
			{...props}
		>
			{/* <g id="SVGRepo_bgCarrier" stroke-width="0"></g> */}
			{/* <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g> */}
			{/* <g id="SVGRepo_iconCarrier">  */}
			<path 
				clipRule="evenodd"
				d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		{/* </g> */}
	</svg>

	);
};
export const MoonFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 22 22"
		width={size || width}
		{...props}
	>
		<path
			d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
			fill="currentColor"
		/>
	</svg>
);

export const SunFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 22 22"
		width={size || width}
		{...props}
	>
		<g fill="currentColor">
			<path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
			<path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
		</g>
	</svg>
);

export const HeartFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
			fill="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
	</svg>
);

export const SearchIcon = (props: IconSvgProps) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height="1em"
		role="presentation"
		viewBox="0 0 24 24"
		width="1em"
		{...props}
	>
		<path
			d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
		<path
			d="M22 22L20 20"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
);

