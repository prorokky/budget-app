import { Button } from '@components/Button'
import React from 'react'

import styles from './InfoHeader.module.less'

type InfoHeaderProps = {
	buttonOnClick?: () => void;
	hasButton?: boolean;
}

export const InfoHeader: React.FC<InfoHeaderProps> = ({ buttonOnClick, hasButton = true }) => (
	<div className={ styles.container }>
		{ hasButton && buttonOnClick && <Button
			isLoading={ false }
			onClick={ buttonOnClick }
			className={ styles.button }
		>
			<p>+</p>
		</Button> }
	</div>
)
