// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {   
	 "productsList": [
	{
		"id": 3,
		"quantity": 0
	}
]
}

test('Return 200 Status Code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});



test('Return body should contain courierService: Order and Go', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["courierService"]).toBe("Order and Go");
});