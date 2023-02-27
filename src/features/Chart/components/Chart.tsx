import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'
import React from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
)

export const options = {
	responsive: true,
}

const labels = ['Budget incomes and outcomes']

export const data = {
	labels,
	datasets: [
		{
			label: 'Income',
			data: [25],
			backgroundColor: '#00D29C',
		},
		{
			label: 'Outcome',
			data: [86],
			backgroundColor: '#EB515E',
		},
	],
}

export const Chart: React.FC = () => <Bar options={ options } data={ data } />

