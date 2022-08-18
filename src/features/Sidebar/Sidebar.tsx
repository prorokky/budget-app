import Budget from '@assets/Sidebar/budgetsIcon.svg'
import Chart from '@assets/Sidebar/chartIcon.svg'
import OperationsCategory from '@assets/Sidebar/operationsCategoryIcon.svg'
import Operations from '@assets/Sidebar/operationsIcon.svg'
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
			<div className={ styles.icon }>
				<Operations />
			</div>
			<p>Operations</p>
		</div>
		<div className={ styles.pageLink }>
			<div className={ styles.icon }>
				<OperationsCategory />
			</div>
			<p>Operations category</p>
		</div>
		<div className={ styles.pageLink }>
			<div className={ styles.icon }>
				<Chart />
			</div>
			<p>Chart of income and expenses</p>
		</div>
	</div>
)
