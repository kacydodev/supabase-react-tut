import { useQuery } from '@tanstack/react-query';
import useSupabaseBrowser from './utils/supabase-browser';
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

	return <></>;
}
