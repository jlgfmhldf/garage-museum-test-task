import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import NumberText from '../NumberText'

storiesOf('NumberText', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<NumberText number={1}>
			Why not try removing some filters or searching by a different keyword in the field above?
		</NumberText>
	))
