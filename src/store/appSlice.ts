import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState, Budget  } from './types'

export const initialState: AppState = {
	budgets: [],
}

export const appSlice = createSlice({
	name: 'budgetControl',
	initialState,
	reducers: {
		addBudget: (state, action: PayloadAction<Budget>) => {
			state.budgets.push(action.payload)
		},
	},
})

export const appSliceReducer = appSlice.reducer
