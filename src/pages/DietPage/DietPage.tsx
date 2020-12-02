/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import React, {Fragment, useState} from 'react'
import {Route} from '../../types/Route'
import {Card, CardContent, CardHeader, CardMedia, Collapse, Icon, Typography} from '@material-ui/core'
import {PageTitle} from '../shared/PageTitle/PageTitle'
import {useDietPageStyle} from './useDietPageStyle'

export const DietPage: Route = () => {
	const [expanded, setExpanded] = useState(false)
	
	const handleExpandClick = () => {
		setExpanded(prev => !prev)
	}
	
	const styles = useDietPageStyle()
	
	return (
		<Fragment>
			<PageTitle>
				We will help you stay healthy!
			</PageTitle>
			<Card css={styles.cardRoot} elevation={7}>
				<CardHeader
					action={
						<Icon onClick={handleExpandClick}>
							expand_more
						</Icon>
					}
					title='BMI & Diet recommendations'
				/>
				<CardMedia
					css={styles.cardMedia}
					component='img'
					src='https://images.unsplash.com/photo-1588276552401-30058a0fe57b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80'
					title='BMI 1'
				/>
				<CardContent>
					<Typography
						align='left'
						variant='overline'
						component='p'
						onClick={handleExpandClick}>
						This impressive paella is a perfect healthy dish and a fun meal to cook together with your
						guests. Add 1 cup of frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<Collapse in={expanded}
				          timeout='auto'
				          unmountOnExit>
					<CardContent>
						<Typography align='left' paragraph variant='h6'>Method:</Typography>
						<Typography align='left' paragraph>
							Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
							minutes.
						</Typography>
						<Typography align='left' paragraph>
							Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
							heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
							browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
							and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
							pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
							saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
						</Typography>
						<Typography align='left' paragraph>
							Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
							without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
							medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
							again without stirring, until mussels have opened and rice is just tender, 5 to 7
							minutes more. (Discard any mussels that don’t open.)
						</Typography>
						<Typography align='left'>
							Set aside off of the heat to let rest for 10 minutes, and then serve.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</Fragment>
	)
}

DietPage.routeName = '/diet'
DietPage.displayName = 'Optimal Diet'
DietPage.icon = 'local_dining'