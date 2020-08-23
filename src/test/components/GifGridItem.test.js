import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
	const title = 'Titulo de prueba';
	const url = 'https://localhost/algo.jpg';
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('Debe mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de tener un párrafo con el titulo', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('Debe de tener la imagen igual al url y alt de los props', () => {
		const img = wrapper.find('img');
		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	});

	test('Debe tener las clases animate__animated animate__bounceIn', () => {
		const div = wrapper.find('div');
		expect(div.hasClass('animate__animated')).toBe(true);
		expect(div.hasClass('animate__bounceIn')).toBe(true);
	});
});
