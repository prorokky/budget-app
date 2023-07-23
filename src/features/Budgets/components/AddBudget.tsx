import { useAppDispatch, useAppSelector } from '@src/hooks'
import { onChangeBudget } from '@store/actions'
import {
	onChangeBudgetDateExpireInput,
	onChangeBudgetNameInput,
	onChangeBudgetSumInput,
} from '@store/appSlice'
import React from 'react'

import styles from '../styles/AddBudget.module.less'

type AddBudgetProps = {
	setOpenAddBudgetModal: (setOpen: boolean) => void;
}

export const AddBudget: React.FC<AddBudgetProps> = ({setOpenAddBudgetModal}) => {
	const dispatch = useAppDispatch()
	const { budgetNameInput, budgetSumInput, budgetDateInput } =
		useAppSelector((state) => state.appSlice.budgetInput)

	const onClickHandle = () => {
		dispatch(onChangeBudget(budgetNameInput, budgetSumInput, budgetDateInput, false))
		setOpenAddBudgetModal(false)
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
			<h6 className={ styles.title }>Input budget info</h6>
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
