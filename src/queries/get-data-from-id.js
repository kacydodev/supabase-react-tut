export function getData(client) {
	return (
		client
			.from('sale-deals')
			.select()
			// .select(
			// 	`
			//   id,
			//   name
			// `
			// )
			// .eq('id', countryId)
			.throwOnError()
			.single()
	);
}
