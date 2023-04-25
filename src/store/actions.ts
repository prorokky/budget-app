import { appSlice } from './appSlice'
import { AppDispatch } from './store'
import { Budget } from './types'

export const saveBudget = (name: string, sum: string, date: string) =>
	(dispatch: AppDispatch) => {
		const month = date.split('/')[1]
		const day = date.split('/')[0]
		const year = date.split('/')[2]
		const timestampDate = Date.parse(`${month}/${day}/${year}`)
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
		}

		dispatch(appSlice.actions.addBudget(budgetObj))
		dispatch(appSlice.actions.onChangeBudgetNameInput(''))
		dispatch(appSlice.actions.onChangeBudgetSumInput(''))
		dispatch(appSlice.actions.onChangeBudgetDateExpireInput(''))
	}
