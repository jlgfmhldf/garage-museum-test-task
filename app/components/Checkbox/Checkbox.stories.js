import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Checkbox from '../Checkbox'

const defaultKnobs = () => ({
	children: text('Value', 'Еженедельная рассылка Музея «Гараж»'),
	checked: boolean('Checked', false),
})

storiesOf('Checkbox', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<Checkbox { ...defaultKnobs() } />
	))
