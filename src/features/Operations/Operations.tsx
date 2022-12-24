
import { Header } from '@components/Header'
import { InfoHeader } from '@components/InfoHeader'
import React, { useState } from 'react'

import { OperationInfo } from './components'
import { OperationCard } from './components/OperationCard'
import styles from './styles/Operations.module.less'

export const Operations: React.FC = () => {
	const [_isOpenModal, setOpenModal] = useState<boolean>(false)

	return (
		<div className={ styles.container }>
			<div className={ styles.listOfOperations }>
				<Header headerName='Operations' />
				<div className={ styles.operationsContainer }>
					<OperationCard />
				</div>
			</div>
			<div className={ styles.operationInfo }>
				<InfoHeader buttonOnClick={ () => setOpenModal(true) } />
				<OperationInfo />
			</div>
		</div>
	)
}
