import * as core from '@actions/core'
import { createClient } from './client'
import { writeFileSync } from 'fs'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const outputFile = core.getInput('save-schema-file-to')

    const client = await createClient({
      apiUrl: core.getInput('deployment-url'),
      oidcClientId: core.getInput('oidc-client-id'),
      oidcClientSecret: core.getInput('oidc-client-secret'),
      oidcIssuer: core.getInput('oidc-issuer')
    })

    const result = await client.getSchemaJSONString({})

    core.debug(`retrieved schema: ${result.schema}`)

    core.info(`Writing Cedar schema to ${outputFile}`)

    writeFileSync(outputFile, result.schema)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
