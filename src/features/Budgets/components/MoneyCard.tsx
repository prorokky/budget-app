import React, { useEffect, useState } from 'react'

import styles from '../styles/MoneyCard.module.less'

type MoneyCardProps = {
	sum: number;
	spendSum: number;
	date: number;
}

export const MoneyCard: React.FC<MoneyCardProps> = ({ sum, spendSum, date }) => {
	const [leftSum, setLeftSum] = useState<number>(0)
	const [daysLeft, setDaysLeft] = useState<number>()

	useEffect(() => {
		const today = new Date()
		const differenceInTime = date - today.getTime()
    	const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24))

		if (differenceInDays > 0) {
			setDaysLeft(differenceInDays)
		} else setDaysLeft(0)
	}, [date])

	useEffect(() => {
		const calcLeftSum = Number.parseFloat(((1 - spendSum / sum) * 100).toFixed(2))

		setLeftSum(calcLeftSum)
	}, [spendSum, sum])

	return (
		<div className={ styles.budgetDetails }>
			{ spendSum <= sum ?
				<p className={ styles.withinBudget }>You are within the budget</p>
				: <p className={ styles.outBudget }>You are out of budget</p>
			}
			<div className={ styles.moneyCard }>
				<div className={ styles.top }>
					<div className={ styles.topLeft }>
						<p>You can spend</p>
						<h1>{ sum - spendSum } RUB</h1>
						<p className={ styles.perDay }>Per day</p>
					</div>
					<div className={ styles.topRight }>
						<p>Almost spend</p>
						<h1>{ spendSum } RUB</h1>
					</div>
				</div>
				<div className={ styles.bottom }>
					<div className={ styles.bottomLeft }>
						<p>Left</p>
						<h1>{ leftSum }%</h1>
					</div>
					<div className={ styles.bottomRight }>
						<p>Budget</p>
						<h1>{ sum } RUB</h1>
					</div>
				</div>
				<p className={ styles.daysLeft }>
					{ daysLeft } days left
				</p>
			</div>
		</div>)
}
