'use client';
import React from 'react';

const Button = ({ title, type, containerStyles }: ButtonProps) => {
	return (
		<button
			type={type || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={() => {}}
			disabled={false}>
			{title}
		</button>
	);
};

export default Button;
