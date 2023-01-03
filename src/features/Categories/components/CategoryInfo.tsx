import { Button } from '@components/Button'
import { OperationCard } from '@features/Operations/components'
import React from 'react'

import styles from '../styles/CategoryInfo.module.less'

export const CategoryInfo: React.FC = () => <div className={ styles.categoryNameHeader }>
	<div className={ styles.changeButton }>
		<Button
			isLoading={ false }
			onClick={ () => console.log('button edit clicked') }
			className={ styles.button }
		>
			<p>Edit</p>
		</Button>
	</div>
	<p className={ styles.categoryName }>
		Salary
	</p>
	<div className={ styles.categoryDetails }>
		<OperationCard />
	</div>
</div>
