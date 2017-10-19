const validate = requiredValues => (values, props) => {
	const errors = {}

	requiredValues.forEach(item => {
		if (!values[item]) {
			errors[item] = 'Обязательное поле'
		}
	})

	if (values.email) {
		var regexpEmail = /.+@.+\..+/i

		if (!regexpEmail.test(values.email)) {
			errors.email = 'Невалидный email'
		}
	}

	return errors
}

export default validate
