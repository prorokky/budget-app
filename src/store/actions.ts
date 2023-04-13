import { appSlice } from './appSlice'
import { AppDispatch } from './store'

// eslint-disable-next-line unicorn/consistent-function-scoping
export const saveBudget = () => (dispatch: AppDispatch) => {
	console.log('here')
	dispatch(appSlice.actions.onChangeBudgetNameInput(''))
}
