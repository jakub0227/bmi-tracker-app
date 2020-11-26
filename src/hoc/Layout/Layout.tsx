/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Box, Paper} from '@material-ui/core'
import React, {FC} from 'react'
import {GlobalStyle} from './GlobalStyle/GlobalStyle'
import {Footer} from './Footer/Footer'
import {Navigation} from './Navigation/Navigation'
import {useLayoutStyle} from './useLayoutStyle'

interface LayoutProps {

}

export const Layout: FC<LayoutProps> = props => {
	const styles = useLayoutStyle()
	return (
		<Paper square elevation={0} css={styles.root}>
			<GlobalStyle/>
			<Navigation/>
			<Box css={styles.page}>
				<Box css={styles.wrapper}>
					{props.children}
				</Box>
			</Box>
			<Footer/>
		</Paper>
	)
}