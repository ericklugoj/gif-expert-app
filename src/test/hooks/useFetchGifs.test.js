import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'; // Se instala el paquete

describe('Pruebas en el custom hook useFetchGifs', () => {
	test('Debe de retornar el estado inicial', async () => {
		// result almacena el estado actual del hook al momento de correrlo
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('One Punch')
		);
		const { data, loading } = result.current;

		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test('Debe de retornar un arreglo de imgs y el loading en false', async () => {
		// waitForNextUpdate regresa una promesa cuando el estado cambia
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('One Punch')
		);

		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false);
	});
});
