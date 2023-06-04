import React from 'react'
import Modal from 'react-modal'

type ModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	children: JSX.Element;
}

const customStyles = {
	overlay: {
		zIndex: 2,
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		padding: '0px',
		borderRadius: '6px',
		width: 'auto',
		maxWidth: '100%',
		transform: 'translate(-50%, -50%)',
		zIndex: '2',
	},
}

export const ModalComponent: React.FC<ModalProps> = ({isOpen, closeModal, children}) => (
	<Modal
		isOpen = { isOpen }
		onRequestClose={ closeModal }
		style={ customStyles }
		ariaHideApp={ false }
	>
		{ children }
	</Modal>
)
