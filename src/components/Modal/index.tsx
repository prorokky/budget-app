import React from 'react'
import Modal from 'react-modal'

type ModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	children: JSX.Element;
}

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		zIndex: '10',
	},
}

export const ModalComponent: React.FC<ModalProps> = ({isOpen, closeModal, children}) => (
	<Modal
		isOpen = { isOpen }
		onRequestClose={ closeModal }
		style={ customStyles }
	>
		{ children }
	</Modal>
)
