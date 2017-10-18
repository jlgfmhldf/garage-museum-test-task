import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import SurveyPopup from '../SurveyPopup'

storiesOf('SurveyPopup', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<SurveyPopup />
	))
