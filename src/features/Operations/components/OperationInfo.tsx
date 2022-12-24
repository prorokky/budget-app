import OperationIcon from '@assets/Operations/operationIcon.svg'
import { Button } from '@components/Button'
import React from 'react'

import styles from '../styles/OperationInfo.module.less'

export const OperationInfo: React.FC = () => (
	<div className={ styles.operationNameHeader }>
		<div className={ styles.changeButton }>
			<Button
				isLoading={ false }
				onClick={ () => console.log('button edit clicked') }
				className={ styles.button }
			>
				<p>Edit</p>
			</Button>
		</div>
		<p className={ styles.operationName }>
			Salary
		</p>
		<div className={ styles.operationSum }>
			<h1>3678 RUB</h1>
			<OperationIcon />
		</div>
		<div className={ styles.operationDetails }>
			<p>Details</p>
			<div className={ styles.detailsCard }>
				<p>05.06.2021</p>
				<p>Budget Name</p>
				<p>Salry</p>
			</div>
		</div>
		{/* TODO: Add geolocation */}
	</div>
)
