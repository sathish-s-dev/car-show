interface ButtonProps {
	title: string;
	type?: 'button' | 'submit' | 'reset';
	handleClick?: () => void;
	containerStyles?: string;
	textStyles?: string;
	icon?: string;
}

interface Car {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

interface CarDetailsProps {
	car: Car;
	closeModal: () => void;
	isOpen: boolean;
}

interface SearchParamsProps {
	manufacturer?: string;
	model?: string;
	year?: string;
	fuel?: string;
}

interface HomeProps {
	searchParams?: SearchParamsProps;
}

interface FilterListProps {
	value: FilterItemval[];
	title: string;
	select: string | undefined;
}
