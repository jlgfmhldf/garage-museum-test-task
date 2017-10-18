import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import SubscriptionPopup from '../SubscriptionPopup'

storiesOf('SubscriptionPopup', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<SubscriptionPopup />
	))
