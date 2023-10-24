import { useAppDispatch, useAppSelector } from '@src/hooks'
import { onChangeBudget } from '@store/actions'
import {
	onChangeBudgetDateExpireInput,
	onChangeBudgetNameInput,
	onChangeBudgetSumInput,
} from '@store/appSlice'
import { Budget } from '@store/types'
import React, { useEffect } from 'react'

import styles from '../styles/AddBudget.module.less'

type AddBudgetProps = {
	setOpenEditBudgetModal: (setOpen: boolean) => void;
	budget: Budget;
}

export const EditBudget: React.FC<AddBudgetProps> = ({setOpenEditBudgetModal, budget}) => {
	const dispatch = useAppDispatch()
	const { budgetNameInput, budgetSumInput, budgetDateInput } =
	useAppSelector((state) => state.appSlice.budgetInput)

	useEffect(() => {
		dispatch(onChangeBudgetNameInput(budget.name))
		dispatch(onChangeBudgetSumInput(budget.sum.toString()))
	}, [budget.date, budget.name, budget.sum, dispatch])

	const onClickHandle = () => {
		dispatch(onChangeBudget(budgetNameInput, budgetSumInput, budgetDateInput, true))
		setOpenEditBudgetModal(false)
	}

	const onChangeNameHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name: string = event.target.value.toString()

		dispatch(onChangeBudgetNameInput(name))
	}

	const onChangeSumHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const sum: string = event.target.value.toString()

		dispatch(onChangeBudgetSumInput(sum))
	}

	const onChangeDateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const date: string = event.target.value.toString()

		dispatch(onChangeBudgetDateExpireInput(date))
	}

	return(
		<div className={ styles.modalContainer }>
			<h6 className={ styles.title }>Edit budget info</h6>
			<input
				placeholder='BUDGET'
				value={ budgetNameInput }
				onChange={ (event) => onChangeNameHandle(event) }
			/>
			<input
				placeholder='SUMM'
				type='number'
				value={ budgetSumInput }
				onChange={ (event) => onChangeSumHandle(event) }
			/>
			<input
				placeholder='DD/MM/YYYY EXPIRE'
				value={ budgetDateInput }
				onChange={ (event) => onChangeDateHandle(event) }
			/>
			{ /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */ }
			<p
				className={ styles.save }
				onClick={ () => onClickHandle() }
			>
				Save
			</p>
		</div>
	)
}
