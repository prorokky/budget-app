import { Error, Header, InfoHeader, ModalComponent } from '@components'
import { useAppDispatch, useAppSelector } from '@src/hooks'
import { setError } from '@store/appSlice'
import React, { useState } from 'react'

import { AddOperation, OperationInfo } from './components'
import { OperationCard } from './components/OperationCard'
import styles from './styles/Operations.module.less'

export const Operations: React.FC = () => {
	const dispatch = useAppDispatch()
	const [isOpenAddOperationModal, setOpenAddOperationModal] = useState<boolean>(false)
	const error = useAppSelector((state) => state.appSlice.error)

	const onCloseError = () => {
		dispatch(setError({
			code: -1,
			message: '',
		}))
	}

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
				isOpen={ error.code !== -1 }
				closeModal={ onCloseError }
			>
				<Error code={ error.code } message={ error.message } onCloseFunc={ onCloseError } />
			</ModalComponent>
			<ModalComponent
				isOpen={ isOpenAddOperationModal }
				closeModal={ () => setOpenAddOperationModal(false) }
			>
				<AddOperation setOpenAddOperationModal={ setOpenAddOperationModal } />
			</ModalComponent>
		</div>
	)
}
