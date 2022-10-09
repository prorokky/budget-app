import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { InfoHeader } from '@components/InfoHeader'
import React from 'react'

import { BudgetCard, MoneyCard } from './components'
import styles from './styles/Budgets.module.less'

export const Budgets: React.FC = () => (
	<div className={ styles.container }>
		<div className={ styles.listOfBudgets }>
			<Header headerName='Budgets' />
			<div className={ styles.budgetsContainer }>
				<BudgetCard />
			</div>
		</div>
		<div className={ styles.budgetInfo }>
			<InfoHeader buttonOnClick={ () => console.log('button plus clicked') } />
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
					budget name
				</p>
			</div>
			<div className={ styles.datesInfo }>
				<p>month year</p>
			</div>
			<MoneyCard />
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
		</div>
	</div>
)
