import { Header, InfoHeader, ModalComponent } from '@components'
import React, { useState } from 'react'

import { AddOperation, OperationInfo } from './components'
import { OperationCard } from './components/OperationCard'
import styles from './styles/Operations.module.less'

export const Operations: React.FC = () => {
	const [isOpenAddOperationModal, setOpenAddOperationModal] = useState<boolean>(false)

	return (
		<div className={ styles.container }>
			<div className={ styles.listOfOperations }>
				<Header headerName='Operations' />
				<div className={ styles.operationsContainer }>
					<OperationCard />
				</div>
				<div
					className={ styles.addOperation }
					role='button'
					onClick={ () => setOpenAddOperationModal(true) }>
					+
				</div>
			</div>
			<div className={ styles.operationInfo }>
				<InfoHeader hasButton={ false } />
				<OperationInfo />
			</div>
			<ModalComponent
				isOpen={ isOpenAddOperationModal }
				closeModal={ () => setOpenAddOperationModal(false) }
			>
				<AddOperation setOpenAddOperationModal={ setOpenAddOperationModal } />
			</ModalComponent>
		</div>
	)
}
