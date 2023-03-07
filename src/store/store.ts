import { configureStore } from '@reduxjs/toolkit'

import { appSliceReducer as appReducer} from './appSlice'

export const store = configureStore({
	reducer: {
		appSlice: appReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
