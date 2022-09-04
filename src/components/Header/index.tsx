import React from 'react'

import styles from './Header.module.less'

type HeaderProps = {
	headerName: 'Budgets' | 'Operations' | 'Categories';
}

export const Header: React.FC<HeaderProps> = ({ headerName }) => (
	<div className={ styles.container }>
		<p className={ styles.headerName }>{ headerName }</p>
	</div>
)
