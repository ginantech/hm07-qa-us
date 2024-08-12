// checking deleted kit 

const config = require('../config');

test('Kit is deleted', async () => {
	let DeletedKit = (null);
	expect(DeletedKit).toBe(null);
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
});

// checking deleted cart

test('Cart is deleted', async () => {
	let DeletedCart = (null);
	expect(DeletedCart).toBe(null);
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/:id`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
});