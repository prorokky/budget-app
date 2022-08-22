import { Sidebar } from '@features/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'


export const Layout: React.FC = () => (
	<React.Fragment>
		<Sidebar />
		<Outlet />
	</React.Fragment>
)
