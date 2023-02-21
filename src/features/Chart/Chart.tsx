
import { Header, InfoHeader } from '@components'
import { BudgetCard } from '@features/Budgets/components'
import React, { useState } from 'react'

import { ChartInfo } from './components'
import styles from './styles/Chart.module.less'

export const Chart: React.FC = () => {
	const [_isOpenModal, setOpenModal] = useState<boolean>(false)

	return(<div className={ styles.container }>
		<div className={ styles.listOfBudgets }>
			<Header headerName='Budgets' />
			<div className={ styles.budgetsContainer }>
				<BudgetCard />
			</div>
		</div>
		<div className={ styles.chartInfo }>
			<InfoHeader buttonOnClick={ () => setOpenModal(true) } />
			<ChartInfo />
		</div>
	</div>)
}
