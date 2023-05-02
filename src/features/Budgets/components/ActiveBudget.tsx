import { Button, InfoHeader } from '@components'
import { Budget, Months } from '@store/types'
import React, { useEffect, useState } from 'react'

import styles from '../styles/ActiveBudget.module.less'
import { MoneyCard } from './MoneyCard'

type ActiveBudgetProps = {
	budget: Budget;
	setOpenModal: (isOpen: boolean) => void;
}

export const ActiveBudget: React.FC<ActiveBudgetProps> = ({ budget, setOpenModal }) => {
	const [budgetYear, setBudgetYear] = useState<number>()
	const [budgetMonth, setBudgetMonth] = useState<string>()

	useEffect(() => {
		const date = new Date(budget.date)

		setBudgetYear(date.getFullYear())
		setBudgetMonth(Months[date.getMonth()])
	}, [budget.date])

	return (
		<div className={ styles.budgetInfo }>
			<InfoHeader buttonOnClick={ () => setOpenModal(true) } />
			<div className={ styles.budgetNameHeader }>
				<div className={ styles.changeButton }>
					<Button
						isLoading={ false }
						onClick={ () => console.log('button edit clicked') }
						className={ styles.button }
					>
						<p>Edit</p>
					</Button>
				</div>
				<p className={ styles.budgetName }>
					{ budget.name }
				</p>
			</div>
			<div className={ styles.datesInfo }>
				<p>{ budgetMonth } { budgetYear }</p>
			</div>
			<MoneyCard sum={ budget.sum } spendSum={ budget.spendSum } date={ budget.date }/>
			<div className={ styles.transactions }>
				<div className={ styles.transactionsHeader }>
					<p>Transactions list</p>
				</div>
				<div className={ styles.transactionsCardsContainer }>
					<div className={ styles.transactionCard }>
						<p className={ styles.date }>Date</p>
						<h1 className={ styles.summ }>46789 RUB</h1>
						<p className={ styles.category }>Category</p>
					</div>
					<div className={ styles.transactionCard }>
						<p className={ styles.date }>Date</p>
						<h1 className={ styles.summ }>46789 RUB</h1>
						<p className={ styles.category }>Category</p>
					</div>
					<div className={ styles.transactionCard }>
						<p className={ styles.date }>Date</p>
						<h1 className={ styles.summ }>46789 RUB</h1>
						<p className={ styles.category }>Category</p>
					</div>
					<div className={ styles.transactionCard }>
						<p className={ styles.date }>Date</p>
						<h1 className={ styles.summ }>46789 RUB</h1>
						<p className={ styles.category }>Category</p>
					</div>
				</div>
			</div>
		</div>)
}
