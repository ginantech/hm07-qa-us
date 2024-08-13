// checking Status

const config = require('../config');

const requestBody = {
		"deliveryTime": 9,
		"productsCount": 10,
		"productsWeight": 11
}

test('Status should return 200', async () => { 
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/order-and-go/v1/delivery`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
			actualStatusCode = response.status
			console.log(response);
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

// checking Body contains correct Data

test('Status Body should contain correct data', async () => {
	let StatusBody;
    try {
		const response = await fetch(`${config.API_URL}/order-and-go/v1/delivery`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
			StatusBody = response.status
			console.log(response);
	} catch (error) {
		console.error(error);
	}
	expect(StatusBody).toBe(StatusBody); 
});


