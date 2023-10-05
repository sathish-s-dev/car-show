'use client';
import { ChangeEvent, Fragment, useEffect, useState } from 'react';
var { Listbox, Transition } = require('@headlessui/react');
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { updateUrlParams } from '@/utils';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

interface FilterItemval {
	title: string;
	value: string;
}

interface FilterProps {
	title: string;
	val: FilterItemval[];
	value: string | undefined;
}

export function Filter({ title, val, value }: FilterProps) {
	return (
		<div className='relative'>
			<Lists
				value={val}
				title={title}
				select={value}
			/>
		</div>
	);
}

function Lists({ value, title, select }: FilterListProps) {
	let filter;
	if (select) {
		filter = value.filter((val) => val.value === select);
	}

	const [selected, setSelected] = useState(filter || value[0]);

	console.log(filter);

	const router = useRouter();
	function push(router: AppRouterInstance, route: string) {
		router.push(route, {
			scroll: false,
		});
	}

	useEffect(() => {
		if (selected?.value) {
			let newPath = updateUrlParams(title, selected.value);
			push(router, newPath);
		} else if (!selected?.value) {
			let newPath = updateUrlParams(title, '');
			push(router, newPath);
		}
	}, [selected]);

	return (
		<div className='relative w-36'>
			<Listbox
				value={selected}
				onChange={(e: ChangeEvent) => {
					setSelected(e);
				}}>
				<div className='relative mt-1'>
					<Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none text-sm focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
						<span className='block truncate'>
							{filter ? filter[0].value : title}
						</span>
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
							<ChevronUpDownIcon
								className='h-5 w-5 text-gray-400'
								aria-hidden='true'
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Listbox.Options className='absolute mt-1 max-h-60 text-sm w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10'>
							{value.map((val, valIdx) => (
								<Listbox.Option
									key={valIdx}
									className={({ active }: { active: boolean }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
										}`
									}
									value={val}>
									{({ selected }: { selected: boolean }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}>
												{val.title}
											</span>
											{selected ? (
												<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600'>
													<CheckIcon
														className='h-5 w-5'
														aria-hidden='true'
													/>
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}
