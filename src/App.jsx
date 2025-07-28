import { useQuery } from '@tanstack/react-query';
import { Routes, Route } from 'react-router';
import useSupabaseBrowser from './utils/supabase-browser';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';

export default function App() {
	const supabase = useSupabaseBrowser();
	const { data, isLoading, error } = useQuery({
		queryKey: ['sale-deals'], // Unique identifier for this query
		queryFn: async () => {
			const response = await supabase.from('sale-deals').select();
			if (response.error) {
				throw new Error('Network response was not ok');
			}
			return response.data;
		},
	});
	// console.log(data);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			<Routes>
				<Route path='/' element={<Signin />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</>
	);
}
