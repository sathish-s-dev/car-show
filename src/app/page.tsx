import { Hero, SearchBar, ComboBox, CarCard } from '@/components';
import Image from 'next/image';
import { cars } from '../constants';

export default function Home() {
	const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || cars;
	return (
		<main className='mx-10'>
			<Hero />
			<div
				className='relative mx-12 padding-x padding-y max-width'
				id='discover'>
				<h2 className='text-3xl font-extrabold'>Car Catalogue</h2>
				<p>Explore the cars you might like.</p>
				<div className='home__filters'>
					<SearchBar />
					<div className='home__filter-container'>
						<Filter title={'fuel'} />
						<Filter title={'year'} />
					</div>
				</div>
				<div>
					{isDataEmpty ? (
						<section>
							<div className='home__cars-wrapper'>
								{cars.map((car) => (
									<CarCard car={car} />
								))}
							</div>
						</section>
					) : (
						<div className='home__error-container'>
							<h2 className='text-black text-xl font-bold'>Oops no results</h2>
							<p>{cars?.message}</p>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}

function Filter({ title }: { title: string }) {
	return <div>{title}</div>;
}

