import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState, Budget  } from './types'

export const initialState: AppState = {
	budgets: [{
		name: 'budget',
		sum: 123,
		date: 1683234000000,
		spendSum: 0,
	}],
	budgetNameInput: '',
	budgetSumInput: '',
	budgetDateInput: '',
	error: {
		code: -1,
		message: '',
	},
}

export const appSlice = createSlice({
	name: 'budgetControl',
	initialState,
	reducers: {
		addBudget: (state, action: PayloadAction<Budget>) => {
			state.budgets.push(action.payload)
		},
		onChangeBudgetNameInput: (state, action: PayloadAction<string>) => {
			state.budgetNameInput = action.payload
		},
		onChangeBudgetSumInput: (state, action: PayloadAction<string>) => {
			state.budgetSumInput = action.payload
		},
		onChangeBudgetDateExpireInput: (state, action: PayloadAction<string>) => {
			state.budgetDateInput = action.payload
		},
		setError: (state, action: PayloadAction<{ code: number; message: string }>) => {
			state.error = action.payload
		},
	},
})

export const {
	addBudget,
	onChangeBudgetNameInput,
	onChangeBudgetSumInput,
	onChangeBudgetDateExpireInput,
	setError,
} = appSlice.actions

export const appSliceReducer = appSlice.reducer
