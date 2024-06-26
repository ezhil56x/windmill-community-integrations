type Mailgun = {
	apiKey: string
	domain: string
}

export async function main(
	resource: Mailgun,
	data: {
		listAddress: string
		memberAddress: string
	}
) {
	return (
		await fetch(
			`https://api.mailgun.net/v3/lists/${data.listAddress}/members/${data.memberAddress}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
				}
			}
		)
	).json()
}
