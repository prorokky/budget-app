import Budget from '@assets/Sidebar/budgetsIcon.svg'
import Chart from '@assets/Sidebar/chartIcon.svg'
import OperationsCategory from '@assets/Sidebar/operationsCategoryIcon.svg'
import Operations from '@assets/Sidebar/operationsIcon.svg'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles/Sidebar.module.less'

export const Sidebar: React.FC = () => (
	<div className={ styles.container }>
		<Link to='budgets' className={ styles.pageLink }>
			<div className={ styles.icon }>
				<Budget />
			</div>
			<p>Budgets</p>
		</Link>
		<Link to='operations' className={ styles.pageLink }>
			<div className={ styles.icon }>
				<Operations />
			</div>
			<p>Operations</p>
		</Link>
		<Link to='categories' className={ styles.pageLink }>
			<div className={ styles.icon }>
				<OperationsCategory />
			</div>
			<p>Operations category</p>
		</Link>
		<Link to='chart' className={ styles.pageLink }>
			<div className={ styles.icon }>
				<Chart />
			</div>
			<p>Chart of income and expenses</p>
		</Link>
	</div>
)
