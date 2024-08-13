// checking Status

const config = require('../config');

test('status should return 200', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);

});

// checking body contains correct data

test('body should contain expected data', async () => {
	let actualBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualBody.name).toBe["Everything We Need"];
		console.log(actualBody);

});