import {
  Interceptor,
  PromiseClient,
  createPromiseClient
} from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'
import { Issuer } from 'openid-client'
import { SchemaService } from './gen/commonfate/authz/v1alpha1/schema_connect'

export interface ClientOptions {
  oidcIssuer: string
  apiUrl: string
  oidcClientSecret: string
  oidcClientId: string
}

export const createClient = async (
  options: ClientOptions
): Promise<PromiseClient<typeof SchemaService>> => {
  const issuer = await Issuer.discover(options.oidcIssuer)
  const oidcClient = new issuer.Client({
    client_id: options.oidcClientId,
    client_secret: options.oidcClientSecret
  })
  const tokenset = await oidcClient.grant({ grant_type: 'client_credentials' })

  const auth: Interceptor = next => async req => {
    req.header.set('Authorization', `Bearer ${tokenset.access_token}`)
    return await next(req)
  }

  const transport = createGrpcTransport({
    baseUrl: options.apiUrl,
    httpVersion: '2',
    interceptors: [auth]
  })
  const client = createPromiseClient(SchemaService, transport)
  return client
}
