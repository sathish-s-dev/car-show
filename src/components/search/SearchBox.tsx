'use client';

import { useState } from 'react';
import { ComboBox } from '..';
import Image from 'next/image';

export default function SearchBar() {
	const handleSubmit = () => {};
	const [select, setSelect] = useState({});
	return (
		<form
			onSubmit={handleSubmit}
			className='searchbar'>
			<div className='flex gap-1 relative w-full'>
				<ComboBox />
			</div>
		</form>
	);
}
