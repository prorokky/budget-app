import React from 'react'

import styles from '../styles/BudgetCard.module.less'

export const BudgetCard: React.FC = () => (
	<div className={ styles.card }>
		<div className={ styles.budgetInfo }>
			<div className={ styles.icon }>
				<p>🔥</p>
			</div>
			<div className={ styles.budgetName }>
				<p>
					Budget name
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
