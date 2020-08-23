import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
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
			<p>{inputValue}</p>
			<input type='text' value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
