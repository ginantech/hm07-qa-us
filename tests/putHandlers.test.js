// checking response for product list

const config = require('../config');

const requestBody = {
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]
}

test('Response is returned 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
        expect(requestBody).toBe(200);
	}
});


// changing name for product list

let name = ('My favorite items');

test('Product List name is changed', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/:id`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
        expect(name).toBe('My favorite items');
	}
});

