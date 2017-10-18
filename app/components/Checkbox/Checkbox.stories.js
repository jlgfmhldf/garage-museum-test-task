import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Checkbox from '../Checkbox'

const defaultKnobs = () => ({
	children: text('Value', 'Еженедельная рассылка Музея «Гараж»'),
	checked: boolean('Checked', false),
	id: number('Id', 1)
})

storiesOf('Checkbox', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<Checkbox { ...defaultKnobs() } />
	))
