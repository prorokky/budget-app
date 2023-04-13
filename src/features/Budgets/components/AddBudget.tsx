import { useAppDispatch, useAppSelector } from '@src/hooks'
import { saveBudget } from '@store/actions'
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
	const budgetNameInput = useAppSelector((state) => state.appSlice.budgetNameInput)
	const budgetSumInput = useAppSelector((state) => state.appSlice.budgetSumInput)
	const budgetDateInput = useAppSelector((state) => state.appSlice.budgetDateInput)

	const onClickHandle = () => {
		dispatch(saveBudget())
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
			<p className={ styles.title }>Input budget name</p>
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
