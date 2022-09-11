import React from 'react'

import { Header } from '../../components'
import { BudgetCard } from './components'
import styles from './styles/Budgets.module.less'

export const Budgets: React.FC = () => (
	<div className={ styles.container }>
		<div className={ styles.listOfBudgets }>
			<Header headerName='Budgets' />
			<div className={ styles.budgetsContainer }>
				<BudgetCard />
			</div>
		</div>
		<div>
			Budget info
		</div>
	</div>
)
