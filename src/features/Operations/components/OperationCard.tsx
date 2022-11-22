import Income from '@assets/Operations/income.svg'
import Spend from '@assets/Operations/spend.svg'
import React from 'react'

import styles from '../styles/OperationCard.module.less'

export const OperationCard: React.FC = () => <div className={ styles.cards }>
	<div className={ styles.cardInfo }>
		<p className={ styles.operationName }>
			{ /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ }
			{ /* @ts-ignore */ }
			<Spend className={ styles.icon }/>
			<p>first operation</p>
		</p>
		<p className={ styles.oparetionSum }>
			555 RUB
		</p>
	</div>
	<div className={ `${styles.cardInfo} ${styles.noBorder}` }>
		<p className={ styles.operationName }>
			{ /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ }
			{ /* @ts-ignore */ }
			<Income className={ styles.icon }/>
			<p>first operation</p>
		</p>
		<p className={ styles.oparetionSum }>
			555 RUB
		</p>
	</div>
</div>
