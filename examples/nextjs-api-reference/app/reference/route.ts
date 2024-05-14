import { ApiReference } from '@readyapi/nextjs-api-reference'

// Local example for local development
// import content from '../../../web/src/fixtures/petstorev3.json'

const openapiResponse = await fetch(
  'https://cdn.readyapi.com/spec/openapi_petstore.json',
)
const content = await openapiResponse.json()

const config = {
  spec: {
    content,
  },
}

export const GET = ApiReference(config)
