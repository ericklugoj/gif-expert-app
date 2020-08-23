import getGifs from '../../helpers/getGifs';

describe('Prueba con getGifs Fetch', () => {
	test('Debe de traer 10 elementos', async () => {
		const gifs = await getGifs('One Punch');
		expect(gifs.length).toBe(10);
	});

	test('Debe traer 0 elementos al no pasar la categoria', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});
