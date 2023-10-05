import { Hero, SearchBar, ComboBox, CarCard } from '@/components';
import Image from 'next/image';

import { fetchCars } from '@/utils';
import { Filter } from '@/components/search/Filter';
// import { cars } from '../constants';
import { fuels, years } from '../constants';

export default async function Home({ searchParams }: HomeProps) {
	const manufacturer = searchParams?.manufacturer;
	const model = searchParams?.model;
	const year = searchParams?.year;
	const fuel = searchParams?.fuel;
	console.log(manufacturer, model, year, fuel);

	const cars = await fetchCars(manufacturer, model, year, fuel);
	console.log(cars);
	const isDataEmpty = !Array.isArray(cars) || cars.length < 1;
	return (
		<main className='mx-10'>
			<Hero />
			<div
				className='relative mx-12 padding-x padding-y max-width'
				id='discover'>
				<h2 className='text-3xl font-extrabold'>Car Catalogue</h2>
				<p>Explore the cars you might like.</p>
				<div className='home__filters'>
					<SearchBar
						manufacturer={manufacturer}
						model={model}
					/>
					<div className='flex justify-start flex-wrap items-center gap-2 w-full max-w-sm'>
						<Filter
							title={'fuel'}
							val={fuels}
							value={fuel}
						/>
						<Filter
							title={'year'}
							val={years}
							value={year}
						/>
					</div>
				</div>
				<div>
					{isDataEmpty ? (
						<div className='home__error-container'>
							<h2 className='text-black text-xl font-bold'>Oops no results</h2>
							<p> {cars.length}</p>
						</div>
					) : (
						<section>
							<div className='home__cars-wrapper'>
								{cars.map((car: Car) => (
									<CarCard car={car} />
								))}
							</div>
						</section>
					)}
				</div>
			</div>
		</main>
	);
}
