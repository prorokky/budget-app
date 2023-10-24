import Minus from '@assets/Budgets/minus.svg'
import Plus from '@assets/Budgets/plus.svg'
import { Error } from '@components/Error'
import { Header } from '@components/Header'
import { ModalComponent } from '@components/Modal'
import { setError } from '@store/appSlice'
import { Budget } from '@store/types'
import React, { useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { ActiveBudget, AddBudget, BudgetCard } from './components'
import styles from './styles/Budgets.module.less'

export const Budgets: React.FC = () => {
	const [isOpenModal, setOpenModal] = useState<boolean>(false)
	const [isOpenAddBudgetModal, setOpenAddBudgetModal] = useState<boolean>(false)
	const [activeBudget, setActiveBudget] = useState<Budget>()
	const budgets = useAppSelector((state) => state.appSlice.budgets)
	const error = useAppSelector((state) => state.appSlice.error)
	const dispatch = useAppDispatch()

	const closeModal = () => {
		setOpenModal(false)
	}

	const onCloseError = () => {
		dispatch(setError({
			code: -1,
			message: '',
		}))
	}

	return (
		<div className={ styles.container }>
			<div className={ styles.listOfBudgets }>
				<Header headerName='Budgets' />
				<div className={ styles.budgetsContainer }>
					{
						budgets.map((budget, index) => <BudgetCard
							key={ index }
							setActiveBudget={ setActiveBudget }
							budget={ budget }
						/>)
					}
				</div>
				<div
					className={ styles.addBudget }
					role='button'
					onClick={ () => setOpenAddBudgetModal(true) }
				>
					+
				</div>
			</div>
			{ activeBudget && <ActiveBudget
				setOpenModal={ setOpenModal }
				budget={ activeBudget }
			/> }
			<ModalComponent
				isOpen={ error.code !== -1 }
				closeModal={ onCloseError }
			>
				<Error code={ error.code } message={ error.message } onCloseFunc={ onCloseError } />
			</ModalComponent>
			<ModalComponent
				isOpen={ isOpenAddBudgetModal }
				closeModal={ () => setOpenAddBudgetModal(false) }
			>
				<AddBudget setOpenAddBudgetModal={ setOpenAddBudgetModal } />
			</ModalComponent>
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
						>Back</p>
						<div className={ styles.icons }>
							<Minus />
							<Plus />
						</div>
						<p className={ styles.categories }>Category</p>
					</div>
					<p className={ styles.date }>14.07.2022, 23:15</p>
					<input placeholder='RUB' value='' />
					{ /* TODO: add geolocation
					<div>
						гео
					</div> */ }
					<p className={ styles.save }>Save</p>
				</div>
			</ModalComponent>
		</div>
	)
}
