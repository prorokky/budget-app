import React from 'react'

import styles from './styles/Sidebar.module.less'

export const Sidebar: React.FC = () => (
	<div className={ styles.container }>
		<div className={ styles.pageLink }>
			first page
		</div>
		<div className={ styles.pageLink }>
			sec page
		</div>
		<div className={ styles.pageLink }>
			third page
		</div>
	</div>
)
