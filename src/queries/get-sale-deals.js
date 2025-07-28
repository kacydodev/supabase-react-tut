export function getData(client) {
	return (
		client
			.from('sale-deals')
			// .select()
			.select(
				`
			  name,
				value.sum()
			`
			)
			// .eq('id', countryId)
			// .order('value', { ascending: false })
			// .limit(1)
			.throwOnError()
		// .single()
	);
}
