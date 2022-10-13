import React from 'react'

import styles from './Modal.module.less'

type ModalProps = {
	onCloseFunction: () => void;
	isOpen: boolean;
	children: JSX.Element;
	width?: string;
}

export const Modal: React.FC<ModalProps> = ({onCloseFunction, isOpen, width, children}) => (
	<div>
		{
			isOpen ? (<div style={ {width} } className={ styles.container }>
				<div className={ styles.closeButton }>
					{ /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */ }
					<p onClick={ () => onCloseFunction() }>&#9747;</p>
				</div>
				<div>
					{ children }
				</div>
			</div>) : undefined
		}
	</div>
)
