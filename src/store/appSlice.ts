import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState, Budget  } from './types'

export const initialState: AppState = {
	budgets: [],
	budgetNameInput: '',
	budgetSumInput: '',
	budgetDateInput: '',
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
	},
})

export const {addBudget, onChangeBudgetNameInput, onChangeBudgetSumInput, onChangeBudgetDateExpireInput} = appSlice.actions

export const appSliceReducer = appSlice.reducer
