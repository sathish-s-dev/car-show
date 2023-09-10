'use client';
import React from 'react';
import Image from 'next/image';

const Button = ({
	title,
	type,
	containerStyles,
	icon,
	textStyles,
	handleClick,
}: ButtonProps) => {
	return (
		<button
			type={type || 'button'}
			className={`${containerStyles} custom-btn`}
			onClick={handleClick}
			disabled={false}>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{icon ? (
				<div className='relative w-6 h-6'>
					<Image
						src={icon}
						alt='arrow-right'
						fill
					/>
				</div>
			) : null}
		</button>
	);
};

export default Button;
