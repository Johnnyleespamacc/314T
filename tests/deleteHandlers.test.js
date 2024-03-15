// eslint-disable-next-line no-undef
const config = require('../config');

test('Status code is 200 ok', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('Response body should return "true"', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(Boolean("true"));
});
