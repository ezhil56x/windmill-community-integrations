import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { LinearClient } from '@linear/sdk'

test('Create Issue', async () => {
	// script arguments here
	const linearClient = new LinearClient({ apiKey: resource.apiKey })
	const title = 'Create Issue'

	const teams = await linearClient.teams()
	const team = teams.nodes[0]
	const teamId = team.id

	console.log(`TEST: Will test Create Issue with arguments: teamId=${teamId}, title=${title}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, teamId, title)

	// assertions here
	expect(response.success).toBe(true)
})
