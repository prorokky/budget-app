import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState, Budget  } from './types'

export const initialState: AppState = {
	budgets: [{
		name: 'budget',
		sum: 123,
		date: 1683234000000,
		spendSum: 12,
	}],
	budgetInput: {
		budgetNameInput: '',
		budgetSumInput: '',
		budgetDateInput: '',
	},
	operationInput: {
		budgetNameInput: '',
		catgoryNameInput: '',
		sumAmountInput: '',
		dateInput: '',
	},
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
		editBudget: (state, action: PayloadAction<Budget>) => {
			const index = state.budgets.findIndex((el) => el.name === action.payload.name)

			state.budgets.splice(index, 1, action.payload)
		},
		onChangeBudgetNameInput: (state, action: PayloadAction<string>) => {
			state.budgetInput.budgetNameInput = action.payload
		},
		onChangeBudgetSumInput: (state, action: PayloadAction<string>) => {
			state.budgetInput.budgetSumInput = action.payload
		},
		onChangeBudgetDateExpireInput: (state, action: PayloadAction<string>) => {
			state.budgetInput.budgetDateInput = action.payload
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
