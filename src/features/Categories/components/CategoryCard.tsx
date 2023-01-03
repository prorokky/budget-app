import React from 'react'

import styles from '../styles/CategoryCard.module.less'

export const CategoryCard: React.FC = () => <div className={ styles.cards }>
	<div className={ styles.cardInfo }>
		<p className={ styles.categoryName }>
			<p>first category</p>
			<p>52</p>
		</p>
	</div>
	<div className={ `${styles.cardInfo} ${styles.noBorder}` }>
		<p className={ styles.categoryName }>
			<p>second category</p>
			<p>52</p>
		</p>
	</div>
</div>
