'use client';

import { FormEvent, useState } from 'react';
import { ComboBox } from '..';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SearchBar({
	manufacturer,
	model: mod,
}: {
	manufacturer: string | undefined;
	model: string | undefined;
}) {
	const router = useRouter();

	const [selected, setSelected] = useState(manufacturer || '');
	const [model, setModel] = useState(mod || '');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(selected, model);
		if (!model && !selected) {
			return alert('please fill the details');
		}
		updateUrlParams(model, selected);
	};
	const updateUrlParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);
		if (model) {
			searchParams.set('model', model);
		} else {
			searchParams.delete('model');
		}
		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer);
		} else {
			searchParams.delete('manufacturer');
		}

		const newPathName = `${window.location.pathname}?${searchParams}`;
		router.push(newPathName);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='searchbar  rounded-3xl items-center'>
			<div className='flex gap-1 relative w-full searchbar__item '>
				<ComboBox
					selected={selected}
					setSelected={setSelected}
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<div className='flex gap-1 relative w-full searchbar__item'>
				<Image
					src={'/model-icon.png'}
					alt='model'
					width={20}
					height={20}
					className='absolute ml-4'
				/>
				<input
					type='text'
					title='model'
					className='w-full searchbar__input h-full mt-1 rounded-r-full'
					placeholder='Tiguan'
					value={model}
					onChange={(e) => setModel(e.target.value)}
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<SearchButton otherClasses='hidden sm:block' />
		</form>
	);
}

function SearchButton({ otherClasses }: { otherClasses: string }) {
	return (
		<button
			className={`-ml-12 bg-transparent z-10 self-center ${otherClasses}`}
			title='search'
			type='submit'>
			<Image
				src='/search.svg'
				alt='search'
				width={40}
				height={40}
				className='object-contain stroke-slate-900'
			/>
		</button>
	);
}
