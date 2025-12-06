// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PetTest126, { toFile } from 'pet-test-126';

const client = new PetTest126({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pet', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.pet.create({ name: 'doggie', photoUrls: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.pet.create({
      name: 'doggie',
      photoUrls: ['string'],
      id: 10,
      category: { id: 1, name: 'Dogs' },
      status: 'available',
      tags: [{ id: 0, name: 'name' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.pet.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.pet.update({ name: 'doggie', photoUrls: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.pet.update({
      name: 'doggie',
      photoUrls: ['string'],
      id: 10,
      category: { id: 1, name: 'Dogs' },
      status: 'available',
      tags: [{ id: 0, name: 'name' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.pet.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('findByStatus: only required params', async () => {
    const responsePromise = client.pet.findByStatus({ status: 'available' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('findByStatus: required and optional params', async () => {
    const response = await client.pet.findByStatus({ status: 'available' });
  });

  // Prism tests are disabled
  test.skip('findByTags: only required params', async () => {
    const responsePromise = client.pet.findByTags({ tags: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('findByTags: required and optional params', async () => {
    const response = await client.pet.findByTags({ tags: ['string'] });
  });

  // Prism tests are disabled
  test.skip('updateWithForm', async () => {
    const responsePromise = client.pet.updateWithForm(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateWithForm: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pet.updateWithForm(0, { name: 'name', status: 'status' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PetTest126.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('uploadImage', async () => {
    const responsePromise = client.pet.uploadImage(
      0,
      await toFile(Buffer.from('# my file contents'), 'README.md'),
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('uploadImage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pet.uploadImage(
        0,
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        { additionalMetadata: 'additionalMetadata' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PetTest126.NotFoundError);
  });
});
