/** @jsxRuntime classic */
/** @jsx jsx  */
import {css, jsx} from '@emotion/react'
import React, {FC, useState} from 'react'
import {AppBar, Hidden, IconButton, Toolbar, Typography, useTheme} from '@material-ui/core'

import {NavigationItems} from './NavigationItems/NavigationItems'
import Icon from '@material-ui/core/Icon'
import {AppDrawer} from './AppDrawer/AppDrawer'

export const Navigation: FC = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          margin-right: ${theme.spacing(4)} px;
          background: linear-gradient(135deg, #8a0185 15%, #64b5f6 80%);
          display: flex;
          opacity: 95%;
		`,
		toolBar: css`
          ${theme.customMixins.flexCentered};
		`,
		title: css`
          flex-grow: 1;
		`,
		menuButton: css`
          margin-right: ${theme.spacing(1)}px;
		`,
	}
	
	const [drawerOpen, setDrawerOpen] = useState(false)
	
	return (
		<AppBar css={styles.root} position='static' color={'primary'}>
			<Toolbar css={styles.toolBar} variant='dense'>
				<Hidden smUp>
					<AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}/>
					<IconButton css={styles.menuButton} onClick={() => setDrawerOpen(true)}>
						<Icon>menu</Icon>
					</IconButton>
				</Hidden>
				<Typography variant='h6' css={styles.title}>
					Your Personal: BMI Tracker
				</Typography>
				<Hidden xsDown>
					<NavigationItems/>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}