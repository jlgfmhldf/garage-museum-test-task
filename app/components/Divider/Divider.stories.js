import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Divider from '../Divider'

storiesOf('Divider', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<Divider />
	))
