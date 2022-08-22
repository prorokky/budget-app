import React from 'react'

type HeaderProps = {
	headerName: 'budgets' | 'operations' | 'categories';
}

export const Header: React.FC<HeaderProps> = ({ headerName }) => (
	<div>
		Header { headerName }
	</div>
)
