import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Test from './Test'

const knobs = () => ({
	children: text('Text', 'Test')
})

storiesOf('Test', module)
    .addDecorator(withKnobs)
    .add('Default', () =>
        <Test
            {...knobs()}
        />
    )
