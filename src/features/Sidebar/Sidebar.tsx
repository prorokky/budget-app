import Budget from '@assets/Sidebar/budgetsIcon.svg'
import React from 'react'

import styles from './styles/Sidebar.module.less'

export const Sidebar: React.FC = () => (
	<div className={ styles.container }>
		<div className={ styles.pageLink }>
			<div className={ styles.icon }>
				<Budget />
			</div>
			<p>Budgets</p>
		</div>
		<div className={ styles.pageLink }>
			sec page
		</div>
		<div className={ styles.pageLink }>
			third page
		</div>
	</div>
)
