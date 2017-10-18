const validate = requiredValues => (values, props) => {
	const errors = {}

	requiredValues.forEach(item => {
		if (!values[item]) {
			errors[item] = 'Обязательное поле'
		}
	})

	return errors
}

export default validate
