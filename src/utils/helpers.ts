export const validateDate = (date: string) => {
	const month = date.split('/')[1]
	const day = date.split('/')[0]
	const year = date.split('/')[2]
	const timestampDate = Date.parse(`${month}/${day}/${year}`)

	return timestampDate
}
