import { useForm } from 'react-hook-form';
import useSupabaseBrowser from '../utils/supabase';

export default function Form({ data }) {
	const supabase = useSupabaseBrowser();

	const names = data.map((person) => person.name);

	const { register, handleSubmit } = useForm();

	const onSubmit = async ({ name, inputAmount }) => {
		await supabase
			.from('sale-deals')
			.update({ value: inputAmount })
			.eq('name', name);
	};

	return (
		// TODO: Error state
		<form onSubmit={handleSubmit(onSubmit)} className='flex items-center'>
			<fieldset className='fieldset w-48'>
				{/* <legend className='fieldset-legend'>Browsers</legend> */}
				<select
					defaultValue='Pick a browser'
					className='select'
					{...register('name', { required: true })}
				>
					<option disabled={true}>Pick a name</option>
					{names.map((name) => (
						<option key={name} value={name}>
							{name}
						</option>
					))}
				</select>
			</fieldset>

			<label className='input w-36'>
				$
				<input
					type='number'
					className='input'
					{...register('inputAmount', { required: true })}
				/>
			</label>

			<button className='btn'>Submit</button>
		</form>
	);
}
