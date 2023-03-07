import React from 'react'
import { Budget } from 'src/store/types'

import styles from '../styles/BudgetCard.module.less'

type BudgetCradProps = {
	budget: Budget;
}

export const BudgetCard: React.FC<BudgetCradProps> = ({budget}) => (
	<div className={ styles.card }>
		<div className={ styles.budgetInfo }>
			<div className={ styles.icon }>
				<p>🔥</p>
			</div>
			<div className={ styles.budgetName }>
				<p>
					{ budget.name }
				</p>
				<p className={ styles.daysLeft }>
					19 days left
				</p>
			</div>
			<p className={ styles.summOfBudget }>
				45000 RUB
			</p>
		</div>
		<div className={ styles.budgetRemainderLine } />
		<p className={ styles.budgetRemainderPercent }>
			100%
		</p>
	</div>
)
