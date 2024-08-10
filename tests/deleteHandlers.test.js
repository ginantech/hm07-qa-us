// eslint-disable-next-line no-undef
const config = require('../config');

test('Kit is deleted', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
		expect(DeletedKit).toBe(200);
	}
});
