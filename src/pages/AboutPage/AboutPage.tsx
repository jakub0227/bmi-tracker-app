/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import React from 'react'
import {Route} from '../../types/Route'
import {Container, Paper, Typography} from '@material-ui/core'
import {useLayoutStyle} from '../../hoc/Layout/useLayoutStyle'

export const AboutPage: Route = (props) => {
	
	const styles = useLayoutStyle()
	return (
		<Container>
			<Paper css={styles.paperPage} elevation={5}>
				<Typography css={styles.pageTitleText} variant='h4'>Hello from About section !</Typography>
			</Paper>
		</Container>
	)
}

AboutPage.routeName = '/about'
AboutPage.displayName = 'About'