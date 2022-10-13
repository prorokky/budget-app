import { Button } from '@components/Button'
import React from 'react'

import styles from './InfoHeader.module.less'

type InfoHeaderProps = {
	buttonOnClick: () => void;
}

export const InfoHeader: React.FC<InfoHeaderProps> = ({ buttonOnClick }) => (
	<div className={ styles.container }>
		<Button
			isLoading={ false }
			onClick={ buttonOnClick }
			className={ styles.button }
		>
			<p>+</p>
		</Button>
	</div>
)
