import { useAppDispatch, useAppSelector } from '@src/hooks'
import { onChangeOperation } from '@store/actions'
import {
	onChangeOperationBudgetNameInput,
	onChangeOperationCategoryInput,
	onChangeOperationDateExpireInput,
	onChangeOperationSumInput,
} from '@store/appSlice'
import React from 'react'

import styles from '../styles/AddOperation.module.less'

type AddOperationProps = {
	setOpenAddOperationModal: (setOpen: boolean) => void;
}

export const AddOperation: React.FC<AddOperationProps> = ({ setOpenAddOperationModal }) => {
	const dispatch = useAppDispatch()
	const { budgetNameInput, categoryNameInput, sumAmountInput, dateInput } =
	useAppSelector((state) => state.appSlice.operationInput)

	const onClickHandle = () => {
		dispatch(onChangeOperation(
			budgetNameInput,
			sumAmountInput,
			dateInput,
			categoryNameInput,
			false))
		setOpenAddOperationModal(false)
	}

	const onChangeNameHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name: string = event.target.value.toString()

		dispatch(onChangeOperationBudgetNameInput(name))
	}

	const onChangeSumHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const sum: string = event.target.value.toString()

		dispatch(onChangeOperationSumInput(sum))
	}

	const onChangeDateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const date: string = event.target.value.toString()

		dispatch(onChangeOperationDateExpireInput(date))
	}

	const onChangeCategoryHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const date: string = event.target.value.toString()

		dispatch(onChangeOperationCategoryInput(date))
	}


	return (
		<div className={ styles.modalContainer }>
			<h6 className={ styles.title }>Input operation info</h6>
			<input
				placeholder='BUDGET'
				value={ budgetNameInput }
				onChange={ (event) => onChangeNameHandle(event) }
			/>
			<input
				placeholder='CATEGORY'
				value={ categoryNameInput }
				onChange={ (event) => onChangeCategoryHandle(event) }
			/>
			<input
				placeholder='SUMM'
				type='number'
				value={ sumAmountInput }
				onChange={ (event) => onChangeSumHandle(event) }
			/>
			<input
				placeholder='DD/MM/YYYY'
				value={ dateInput }
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
