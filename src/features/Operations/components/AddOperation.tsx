import { useAppSelector } from '@src/hooks'
import React from 'react'

import styles from '../styles/AddOperation.module.less'

type AddOperationProps = {
	setOpenAddOperationModal: (setOpen: boolean) => void;
}

export const AddOperation: React.FC<AddOperationProps> = ({ setOpenAddOperationModal }) => {
	console.log(setOpenAddOperationModal)
	const { budgetNameInput, catgoryNameInput, sumAmountInput, dateInput } =
	useAppSelector((state) => state.appSlice.operationInput)

	return 		(<div className={ styles.modalContainer }>
		<h6 className={ styles.title }>Input budget info</h6>
		<input
			placeholder='BUDGET'
			value={ budgetNameInput }
			onChange={ (event) => console.log(event) }
		/>
		<input
			placeholder='CATEGORY'
			type='number'
			value={ catgoryNameInput }
			onChange={ (event) => console.log(event) }
		/>
		<input
			placeholder='SUMM'
			type='number'
			value={ sumAmountInput }
			onChange={ (event) => console.log(event) }
		/>
		<input
			placeholder='DD/MM/YYYY'
			value={ dateInput }
			onChange={ (event) => console.log(event) }
		/>
		{ /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */ }
		<p
			className={ styles.save }
			onClick={ () => console.log('click') }
		>
			Save
		</p>
	</div>)
}
