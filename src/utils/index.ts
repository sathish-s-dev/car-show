import { useRouter } from 'next/navigation';

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export const fetchCars = async (
	manufacturer?: string,
	model?: string,
	year?: string,
	fuel?: string
) => {
	const headers = {
		'X-RapidAPI-Key': '04bb338a15msh11028bdb7493372p1ed9cdjsn787e730720cb',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};

	if (!manufacturer && !model && !year && !fuel) {
		return [];
	}

	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars${
		manufacturer ? '?make=' + manufacturer.toLowerCase() : ''
	}${model ? '&model=' + model.toLowerCase() : ''}${
		year ? '&year=' + year.toLowerCase() : ''
	}${fuel ? '&fuel_type=' + fuel.toLowerCase() : ''}`;

	const response = await fetch(url, {
		headers: headers,
	});

	const data = await response.json();
	console.log(url);

	return data;
};

export const getImageUrl = (car: Car, angle?: string) => {
	let key = 'hrjavascript-mastery';

	const url = new URL('https://cdn.imagin.studio/getimage');

	const { make, model, year } = car;

	url.searchParams.append('customer', key);
	url.searchParams.append('make', make);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelFamily', model.split(' ')[0]);

	url.searchParams.append(
		'modelYear',
		`${year}

    `
	);

	url.searchParams.append(
		'angle',
		`${angle}

    `
	);

	return `${url}

  `;
};

export const updateUrlParams = (type: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search);
	if (searchParams.get(type) === value) {
		searchParams.delete(type);
		console.log(searchParams);
	} else if (!value) {
		searchParams.delete(type);
	} else {
		searchParams.set(type, value);
	}
	const newPathName = `${window.location.pathname}?${searchParams}`;
	return newPathName;
};

export function Push(route: string) {
	
}
