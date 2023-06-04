import { useAppDispatch, useAppSelector } from '@src/hooks'
import { editBudget } from '@store/actions'
import {
	onChangeBudgetDateExpireEdit,
	onChangeBudgetNameEdit,
	onChangeBudgetSumEdit,
} from '@store/appSlice'
import React from 'react'

import styles from '../styles/AddBudget.module.less'

type AddBudgetProps = {
	setOpenEditBudgetModal: (setOpen: boolean) => void;
}

export const EditBudget: React.FC<AddBudgetProps> = ({setOpenEditBudgetModal}) => {
	const dispatch = useAppDispatch()
	const budgetNameEdit = useAppSelector((state) => state.appSlice.budgetNameEdit)
	const budgetSumEdit = useAppSelector((state) => state.appSlice.budgetSumEdit)
	const budgetDateEdit = useAppSelector((state) => state.appSlice.budgetDateEdit)

	const onClickHandle = () => {
		dispatch(editBudget(budgetNameEdit, budgetSumEdit, budgetDateEdit))
		setOpenEditBudgetModal(false)
	}

	const onChangeNameHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name: string = event.target.value.toString()

		dispatch(onChangeBudgetNameEdit(name))
	}

	const onChangeSumHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const sum: string = event.target.value.toString()

		dispatch(onChangeBudgetSumEdit(sum))
	}

	const onChangeDateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const date: string = event.target.value.toString()

		dispatch(onChangeBudgetDateExpireEdit(date))
	}

	return(
		<div className={ styles.modalContainer }>
			<h6 className={ styles.title }>Edit budget info</h6>
			<input
				placeholder='BUDGET'
				value={ budgetNameEdit }
				onChange={ (event) => onChangeNameHandle(event) }
			/>
			<input
				placeholder='SUMM'
				type='number'
				value={ budgetSumEdit }
				onChange={ (event) => onChangeSumHandle(event) }
			/>
			<input
				placeholder='DD/MM/YYYY EXPIRE'
				value={ budgetDateEdit }
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
