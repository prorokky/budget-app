import React, { useEffect, useState } from 'react'
import { Budget } from 'src/store/types'

import styles from '../styles/BudgetCard.module.less'

type BudgetCradProps = {
	budget: Budget;
	setActiveBudget?: (index: Budget) => void;
}

export const BudgetCard: React.FC<BudgetCradProps> = ({budget, setActiveBudget}) => {
	const [daysLeft, setDaysLeft] = useState<number>()
	const [leftPercent, setLeftPercent] = useState<number>(0)

	useEffect(() => {
		const today = new Date()
		const differenceInTime = budget.date - today.getTime()
    	const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24))

		if (differenceInDays > 0) {
			setDaysLeft(differenceInDays)
		} else setDaysLeft(0)
	}, [budget.date])

	useEffect(() => {
		const calcLeftPercent = Number.parseFloat(((1 - budget.spendSum / budget.sum) * 100).toFixed(2))

		setLeftPercent(calcLeftPercent)
	}, [budget.spendSum, budget.sum])


	return (
		<div role='button' className={ styles.card } onClick={ () => setActiveBudget && setActiveBudget(budget) }>
			<div className={ styles.budgetInfo }>
				<div className={ styles.icon }>
					<p>🔥</p>
				</div>
				<div className={ styles.budgetName }>
					<p>
						{ budget.name }
					</p>
					<p className={ styles.daysLeft }>
						{ daysLeft } days left
					</p>
				</div>
				<p className={ styles.summOfBudget }>
					{ budget.sum } RUB
				</p>
			</div>
			<div className={ styles.budgetRemainderContainer }>
				<div className={ styles.budgetRemainderLineLeft } style={ { width: `${leftPercent}%` } } />
				<div className={ styles.budgetRemainderLineSpend } style={ { width: `calc(100% - ${leftPercent}%)` } } />
			</div>
			<p className={ styles.budgetRemainderPercent }>
				{ leftPercent }%
			</p>
		</div>
	)
}
