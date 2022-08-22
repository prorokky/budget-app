import './App.less'

import { Budgets } from '@features/Budgets'
import { Categories } from '@features/Categories'
import { Chart } from '@features/Chart'
import { Operations } from '@features/Operations'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components'

export const App: React.FC = () => (
	<Routes>
		<Route path='/' element={ <Layout /> } >
			<Route path='budgets' element={ <Budgets /> } />
			<Route path='operations' element={ <Operations /> } />
			<Route path='categories' element={ <Categories /> } />
			<Route path='chart' element={ <Chart /> } />
		</Route>
	</Routes>
)
