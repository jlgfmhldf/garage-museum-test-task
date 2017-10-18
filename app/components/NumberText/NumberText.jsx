import React, { PureComponent } from 'react'
import {
	string,
	number,
} from 'prop-types'

import s from './NumberText.pcss'

export default class NumberText extends PureComponent {
	static propTypes = {
		number: number,
		children: string,
	}

	static defaultProps = {
		number: 0,
	}

	render() {
		const { number, children } = this.props

		return (
			<p className={s.NumberText}>
				<span className={s.NumberText__number}>{number}.</span>
				{children}
			</p>
		)
	}
}
