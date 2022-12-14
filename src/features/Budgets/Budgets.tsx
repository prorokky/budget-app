import Minus from '@assets/Budgets/minus.svg'
import Plus from '@assets/Budgets/plus.svg'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { InfoHeader } from '@components/InfoHeader'
import { ModalComponent } from '@components/Modal'
import React, { useState } from 'react'

import { BudgetCard, MoneyCard } from './components'
import styles from './styles/Budgets.module.less'

export const Budgets: React.FC = () => {
	const [isOpenModal, setOpenModal] = useState<boolean>(false)

	const closeModal = () => {
		setOpenModal(false)
	}

	return (
		<div className={ styles.container }>
			<div className={ styles.listOfBudgets }>
				<Header headerName='Budgets' />
				<div className={ styles.budgetsContainer }>
					<BudgetCard />
				</div>
			</div>
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
			<ModalComponent
				isOpen={ isOpenModal }
				closeModal={ () => closeModal() }
			>
				<div className={ styles.modalContainer }>
					<div className={ styles.top }>
						{ /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */ }
						<p
							onClick={ () => setOpenModal(false) }
							className={ styles.back }
						>??????????</p>
						<div className={ styles.icons }>
							<Minus />
							<Plus />
						</div>
						<p className={ styles.categories }>??????????????????</p>
					</div>
					<p className={ styles.date }>14.07.2022, 23:15</p>
					<input placeholder='RUB' value='' />
					{ /* TODO: ???????????????? ???????????????????? ??????????????
					<div>
						??????
					</div> */ }
					<p className={ styles.save }>C????????????????</p>
				</div>
			</ModalComponent>
		</div>
	)
}
