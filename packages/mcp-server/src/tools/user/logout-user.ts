// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'pet-test-126-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PetTest126 from 'pet-test-126';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/logout',
  operationId: 'logoutUser',
};

export const tool: Tool = {
  name: 'logout_user',
  description: 'Log user out of the system.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: PetTest126, args: Record<string, unknown> | undefined) => {
  const response = await client.user.logout().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
