import { Button } from '@components/Button'
import React from 'react'

import styles from '../styles/ChartInfo.module.less'

export const ChartInfo: React.FC = () => <div className={ styles.chartNameHeader }>
	<div className={ styles.changeButton }>
		<Button
			isLoading={ false }
			onClick={ () => console.log('button edit clicked') }
			className={ styles.button }
		>
			<p>Edit</p>
		</Button>
	</div>
	<p className={ styles.chartName }>
		Budget name
	</p>
</div>
