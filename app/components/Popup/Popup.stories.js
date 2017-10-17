import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Button from '../../components/Button'
import Popup from '../Popup'

const defaultKnobs = () => ({
	title: text('Title', 'подписка на рассылку музея «гараж»'),
})

const imgSrc = 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=1&auto=format&fit=crop&w=987&h=&q=60&cs=tinysrgb&crop='
const content = <div>
	<img src={imgSrc} alt="" width={400}/>
	<Button>Отправить</Button>
</div>

storiesOf('Popup', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<div style={{ width: 600 }}>
			<Popup { ...defaultKnobs() } >
				{content}
			</Popup>
		</div>
	))
