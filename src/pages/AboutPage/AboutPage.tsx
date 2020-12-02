/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import React, {Fragment} from 'react'
import {Route} from '../../types/Route'
import {PageTitle} from '../shared/PageTitle/PageTitle'
import {Box, Card, Typography} from '@material-ui/core'
import {useAboutPageStyle} from './useAboutPageStyle'
import {AboutPageCarousel} from './AboutPageCarousel/AboutPageCarousel'

export const AboutPage: Route = () => {
	const styles = useAboutPageStyle()
	return (
		<Fragment>
			<PageTitle>Hello from About section!</PageTitle>
			<Box css={styles.root}>
				<Card css={styles.cardRoot}>
					<AboutPageCarousel/>
					<Typography variant='subtitle2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Animi
						consequuntur cum dicta dignissimos dolor doloremque eligendi esse id labore laboriosam, modi,
						mollitia, natus
						nemo nisi nostrum odio pariatur perferendis possimus praesentium quae quod quos repellendus
						saepe sapiente tenetur vel velit
						veniam vitae voluptates voluptatum? Adipisci atque fugit illum necessitatibus
						reiciendis.
					</Typography>
				</Card>
			</Box>
		</Fragment>
	)
}
AboutPage.routeName = '/about'
AboutPage.displayName = 'About'
AboutPage.icon = 'info'
