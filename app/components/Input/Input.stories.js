import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select, number, color } from '@storybook/addon-knobs'
import Input from '../Input'

const defaultKnobs = () => ({
	value: text('Value', 'Анастасия'),
	placeholder: text('Placeholder', 'Ваше имя'),
	errorText: text('Error text', 'Обязательное поле'),
	error: boolean('Error', false),
	required: boolean('Required', false)
})

storiesOf('Input', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<Input { ...defaultKnobs()} />
	))
