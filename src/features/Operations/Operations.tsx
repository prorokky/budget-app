/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Header } from '@components/Header'
import React from 'react'

import { OperationCard } from './components/OperationCard'
import styles from './styles/Operations.module.less'

export const Operations: React.FC = () => (
	<div className={ styles.container }>
		<div className={ styles.listOfOperations }>
			<Header headerName='Operations' />
			<div className={ styles.operationsContainer }>
				<OperationCard />
			</div>
		</div>
	</div>
)
