import { Header } from '@components/Header'
import { InfoHeader } from '@components/InfoHeader'
import React, { useState } from 'react'

import { CategoryCard } from './components'
import { CategoryInfo } from './components/CategoryInfo'
import styles from './styles/Categories.module.less'

export const Categories: React.FC = () => {
	const [_isOpenModal, setOpenModal] = useState<boolean>(false)

	return (
		<div className={ styles.container }>
			<div className={ styles.listOfCategories }>
				<Header headerName='Categories' />
				<div className={ styles.categoriesContainer }>
					<CategoryCard />
				</div>
				<div className={ styles.addBudget }>
					+
				</div>
			</div>
			<div className={ styles.categoryInfo }>
				<InfoHeader buttonOnClick={ () => setOpenModal(true) } />
				<CategoryInfo />
			</div>
		</div>
	)
}
