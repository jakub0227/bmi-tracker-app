/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import React, {FC} from 'react'
import {Drawer, Icon, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {routeList} from '../NavigationItems/routeList'
import {NavigationItem} from '../NavigationItems/NavigationItem/NavigationItem'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button/Button'

interface AppDrawerProps {
	open: boolean
	onClose: () => void
}

export const AppDrawer: FC<AppDrawerProps> = props => {
	return (
		<Drawer anchor='left' open={props.open} onClose={props.onClose}>
			<List>
				{routeList.map(({routeName, displayName, icon}) => (
					<ListItem onClick={props.onClose} component={Link} to={routeName}>
						<ListItemIcon>
							<Icon>{icon}</Icon>
						</ListItemIcon>
						<ListItemText primary={displayName}/>
					</ListItem>
				))}
			</List>
		</Drawer>
	)
}