// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'pet-test-126-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PetTest126 from 'pet-test-126';

export const metadata: Metadata = {
  resource: 'store.order',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/store/order/{orderId}',
  operationId: 'deleteOrder',
};

export const tool: Tool = {
  name: 'delete_store_order',
  description:
    'For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.',
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'integer',
      },
    },
    required: ['orderId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: PetTest126, args: Record<string, unknown> | undefined) => {
  const { orderId, ...body } = args as any;
  const response = await client.store.order.delete(orderId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
