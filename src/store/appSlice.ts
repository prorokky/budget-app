import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState, Budget, Operation  } from './types'

export const initialState: AppState = {
	budgets: [{
		name: 'budget',
		sum: 123,
		date: 1683234000000,
		spendSum: 12,
	}],
	operations: [{
		budgetName: 'budget',
		sum: 500,
		date: 1577912400000,
		category: 'car',
		id: 0.7865042260632649,
	}],
	budgetInput: {
		budgetNameInput: '',
		budgetSumInput: '',
		budgetDateInput: '',
	},
	operationInput: {
		budgetNameInput: '',
		categoryNameInput: '',
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
		addOperation: (state, action: PayloadAction<Operation>) => {
			state.operations.push(action.payload)
		},
		editOperation: (state, action: PayloadAction<Operation>) => {
			const index = state.operations.findIndex((el) => el.id === action.payload.id)

			state.operations.splice(index, 1, action.payload)
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
		onChangeOperationBudgetNameInput: (state, action: PayloadAction<string>) => {
			state.operationInput.budgetNameInput = action.payload
		},
		onChangeOperationSumInput: (state, action: PayloadAction<string>) => {
			state.operationInput.sumAmountInput = action.payload
		},
		onChangeOperationDateExpireInput: (state, action: PayloadAction<string>) => {
			state.operationInput.dateInput = action.payload
		},
		onChangeOperationCategoryInput: (state, action: PayloadAction<string>) => {
			state.operationInput.categoryNameInput = action.payload
		},
		setError: (state, action: PayloadAction<{ code: number; message: string }>) => {
			state.error = action.payload
		},
	},
})

export const {
	addBudget,
	addOperation,
	editOperation,
	editBudget,
	onChangeBudgetNameInput,
	onChangeBudgetSumInput,
	onChangeBudgetDateExpireInput,
	onChangeOperationBudgetNameInput,
	onChangeOperationSumInput,
	onChangeOperationDateExpireInput,
	onChangeOperationCategoryInput,
	setError,
} = appSlice.actions

export const appSliceReducer = appSlice.reducer
