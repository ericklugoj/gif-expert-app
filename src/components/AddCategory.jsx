import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event) => {
		const text = event.target.value;
		setInputValue(text);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategories((prevState) => [inputValue, ...prevState]); // Cuando se pasa como callback regresa el estado anterior
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={inputValue} onChange={handleChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
