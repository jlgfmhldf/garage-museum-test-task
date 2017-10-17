import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Button from '../Button'

const defaultKnobs = () => ({
	children: text('Value', 'Подписаться'),
	disabled: boolean('Disabled', false),
})

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<Button {...defaultKnobs()} />
	))
