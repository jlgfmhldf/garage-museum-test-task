import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Textarea from '../Textarea'

storiesOf('Textarea', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<Textarea
			placeholder='Ваш ответ'
		/>
	))
