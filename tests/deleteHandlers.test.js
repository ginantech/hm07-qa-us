// checking deleted kit 

const config = require('../config');

test('Response should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
		Console.log(actualStatusCode);
	} catch (error) {
	}
	expect(actualStatusCode).toBe(200);
});

// checking deleted cart


test('actual Response Body contains correct data', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
        });
        actualResponseBody = await response.json();
        console.log(actualResponseBody)
    } catch (error) {
        console.error(error);
    }
    expect(actualResponseBody.ok).toBe(true);
}); 
