import React from 'react';

interface CardProps {
	title: string;
	description: string;
	imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-500 border-default-100">
			{/* <img className="w-full" src={imageUrl} alt={title} /> */}
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">{description}</p>
			</div>
		</div>
	);
};

