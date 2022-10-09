import React from 'react'

type ButtonProps = {
	isLoading: boolean;
	onClick: (event: React.MouseEvent) => void;
	className?: string;
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, isLoading, onClick, className }) => (
	<button
		className={ className }
		disabled={ isLoading }
		onClick={ onClick }
	>
		{ children }
	</button>
)
