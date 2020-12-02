/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Box, Container, Paper} from '@material-ui/core'
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
					<Container>
						<Paper css={styles.paperPage} elevation={5}>
							{props.children}
						</Paper>
					</Container>
				</Box>
			</Box>
			<Footer/>
		</Paper>
	)
}