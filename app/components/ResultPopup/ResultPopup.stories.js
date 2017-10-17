import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import ResultPopup from '../ResultPopup'

const content = <p>Спасибо за то, что подписались на рассылку Музея «Гараж»!
		<b>Пройдите короткий опрос, чтобы получить скидку.</b>
	</p>

storiesOf('ResultPopup', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<ResultPopup
			popupTitle='подписка на рассылку музея «гараж»'
			icon='success'
			title='Подписка оформлена!'
			text={content}
			buttonText='Пройти опрос'
		/>
	))
