import { createClient } from './client'

describe('createClient integration test', () => {
  it('should work', async () => {
    if (process.env.CF_API_URL === undefined) {
      console.log('skipping test because CF_API_URL is not set')
      return
    }

    const client = await createClient({
      oidcClientId: process.env.CF_OIDC_CLIENT_ID ?? '',
      oidcClientSecret: process.env.CF_OIDC_CLIENT_SECRET ?? '',
      oidcIssuer: process.env.CF_OIDC_ISSUER ?? '',
      apiUrl: process.env.CF_API_URL ?? ''
    })

    await client.getSchemaJSONString({})
  })
})
