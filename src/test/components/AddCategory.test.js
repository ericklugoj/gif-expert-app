import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	//beforeEach se ejecuta antes de cada test, en este caso reiniciamos el wrapper
	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test('Debe de mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe cambiar la caja de texto', () => {
		const input = wrapper.find('input');
		const value = 'Hola mundo';

		input.simulate('change', {
			target: {
				value: value,
			},
		});

		expect(wrapper.find('p').text().trim()).toBe(value);
	});

	test('No debe de postear la información con submit', () => {
		wrapper.find('form').simulate('submit', {
			preventDefault: () => {},
		});

		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
		const value = 'Hola Mundo';

		// 1. simular el inputChange
		wrapper.find('input').simulate('change', { target: { value } });

		// 2. simular el submit
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		// 3. setCategories se debe de haber llamado
		expect(setCategories).toHaveBeenCalledTimes(1);
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

		// 4. el valor del input debe de estar ''
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
