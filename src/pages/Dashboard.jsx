import { AgCharts } from 'ag-charts-react';
import { includeKeys } from 'filter-obj';

export default function Dashboard({ data }) {
	console.log('data:', data);
	const chartData = data?.map((item) => includeKeys(item, ['name', 'value']));
	// Series: Defines which chart type and data to use
	const series = [{ type: 'bar', xKey: 'name', yKey: 'value' }];

	return (
		<>
			<AgCharts options={{ data: chartData, series: series }} />
		</>
	);
}
