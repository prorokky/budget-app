import { validateDate } from '@src/utils'

import { appSlice } from './appSlice'
import { AppDispatch } from './store'
import { Budget, Operation } from './types'

export const onChangeBudget = (name: string, sum: string, date: string, isEdit = false) =>
	(dispatch: AppDispatch) => {
		const timestampDate = validateDate(date)
		const sumNumber = Number(sum)

		if (!timestampDate || !sumNumber) {
			dispatch(appSlice.actions.setError({
				code: 400,
				message: 'Invalid date format. Check the format dd/mm/yyyy',
			}))

			return
		}

		const budgetObj: Budget = {
			name,
			sum: sumNumber,
			date: timestampDate,
			spendSum: 0,
		}

		if (isEdit) {
			dispatch(appSlice.actions.editBudget(budgetObj))
		} else {
			dispatch(appSlice.actions.addBudget(budgetObj))
		}
		dispatch(appSlice.actions.onChangeBudgetNameInput(''))
		dispatch(appSlice.actions.onChangeBudgetSumInput(''))
		dispatch(appSlice.actions.onChangeBudgetDateExpireInput(''))
	}

export const onChangeOperation = (
	name: string,
	sum: string,
	date: string,
	category: string,
	isEdit = false,
) => (dispatch: AppDispatch) => {
	const timestampDate = validateDate(date)
	const sumNumber = Number(sum)

	if (!timestampDate || !sumNumber) {
		dispatch(appSlice.actions.setError({
			code: 400,
			message: 'Invalid date format. Check the format dd/mm/yyyy',
		}))

		return
	}

	const id = Math.random()

	const operationObj: Operation = {
		budgetName: name,
		sum: sumNumber,
		date: timestampDate,
		category,
		id,
	}

	if (isEdit) {
		dispatch(appSlice.actions.editOperation(operationObj))
	} else {
		dispatch(appSlice.actions.addOperation(operationObj))
	}
}
