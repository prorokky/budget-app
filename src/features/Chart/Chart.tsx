
import { Header, InfoHeader } from '@components'
import { BudgetCard } from '@features/Budgets/components'
import React, { useState } from 'react'

import { useAppSelector } from '../../hooks'
import { ChartInfo } from './components'
import styles from './styles/Chart.module.less'

export const Chart: React.FC = () => {
	const [_isOpenModal, setOpenModal] = useState<boolean>(false)
	const budgets = useAppSelector((state) => state.appSlice.budgets)

	return(<div className={ styles.container }>
		<div className={ styles.listOfBudgets }>
			<Header headerName='Charts' />
			<div className={ styles.budgetsContainer }>
				{ budgets.map((budget) => <BudgetCard budget={ budget } />) }
			</div>
			<div className={ styles.addBudget }>
				+
			</div>
		</div>
		<div className={ styles.chartInfo }>
			<InfoHeader buttonOnClick={ () => setOpenModal(true) } />
			<ChartInfo />
		</div>
	</div>)
}
