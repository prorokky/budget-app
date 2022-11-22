import React from 'react'

import styles from '../styles/MoneyCard.module.less'

export const MoneyCard: React.FC = () => (
	<div className={ styles.budgetDetails }>
		<p className={ styles.withinBudget }>You are within the budget</p>
		<div className={ styles.moneyCard }>
			<div className={ styles.top }>
				<div className={ styles.topLeft }>
					<p>You can spend</p>
					<h1>46789 RUB</h1>
					<p className={ styles.perDay }>Per day</p>
				</div>
				<div className={ styles.topRight }>
					<p>Almost spend</p>
					<h1>35000 RUB</h1>
				</div>
			</div>
			<div className={ styles.bottom }>
				<div className={ styles.bottomLeft }>
					<p>Left</p>
					<h1>100%</h1>
				</div>
				<div className={ styles.bottomRight }>
					<p>Budget</p>
					<h1>450000 RUB</h1>
				</div>
			</div>
			<p className={ styles.daysLeft }>
				14 days left
			</p>
		</div>
	</div>
)
