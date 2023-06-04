import React from 'react'

import styles from './Error.module.less'

type ErrorProps = {
	code: number;
	message: string;
	onCloseFunc: () => void;
}

export const Error: React.FC<ErrorProps> = ({ code, message, onCloseFunc }) => (
	<div className={ styles.container }>
		<h6>Error  { code }</h6>
		<p className={ styles.message }>{ message || '' }</p>
		<button
			className={ styles.close }
			onClick={ () => onCloseFunc() }
		>
			Close
		</button>
	</div>
)
