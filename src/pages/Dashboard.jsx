import { AgCharts } from 'ag-charts-react';
import { includeKeys } from 'filter-obj';
import useSupabaseBrowser from '../utils/supabase-browser';
import { useEffect } from 'react';
import Form from '../components/Form';

export default function Dashboard({ data }) {
	// console.log('data:', data);
	const supabase = useSupabaseBrowser();

	const chartData = data?.map((item) => includeKeys(item, ['name', 'value']));
	const chartSeries = [{ type: 'bar', xKey: 'name', yKey: 'value' }];

	// TODO: Look up supabase subscribe
	useEffect(() => {
		const channel = supabase
			.channel('deal-changes')
			.on(
				'postgres_changes',
				{ event: '*', schema: 'public', table: 'sale-deals' },
				(payload) => {
					console.log(payload);
				}
			)
			.subscribe();

		return () => supabase.removeChannel(channel);
	}, []);

	return (
		<>
			<AgCharts options={{ data: chartData, series: chartSeries }} />
			<Form data={data} />
		</>
	);
}
