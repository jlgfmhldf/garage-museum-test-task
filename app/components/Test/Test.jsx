import React, { PureComponent } from 'react'
import { func, node } from 'prop-types'
import noop from 'noop3'
import s from './Test.css'

export default class Test extends PureComponent {
	static propTypes = {
		children: node,
		onClick: func,
	}

	static defaultProps = {
		children: 'Test',
		onClick: noop,
	}

	render() {
		const { children } = this.props

		return (
          <div className={s.test}>{children}</div>
		)
	}
}

