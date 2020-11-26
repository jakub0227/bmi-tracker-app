/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import React, {useState} from 'react'
import {Route} from '../../types/Route'
import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	Container,
	Icon,
	Paper,
	Typography,
} from '@material-ui/core'
import {useLayoutStyle} from '../../hoc/Layout/useLayoutStyle'

export const DietPage: Route = (props) => {
	
	const [expanded, setExpanded] = useState(false)
	
	const handleExpandClick = () => {
		setExpanded(prev => !prev)
	}
	
	const styles = useLayoutStyle()
	
	return (
		<Container>
			<Paper css={styles.paperPage}
			       elevation={5}>
				<div css={styles.myContainer}>
					<div>
					</div>
				</div>
				<Typography css={styles.pageTitleText}
				            variant='h4'>We will help you stay healthy !</Typography>
				<Card css={styles.card}>
					<CardHeader
						avatar={
							<Avatar variant='rounded'>
								BMI
							</Avatar>
						}
						action={
							<Icon onClick={handleExpandClick}>
								expand_more
							</Icon>
						}
						title='BMI & Diet recommendations'
					/>
					<CardMedia css={styles.cardImg}
					           component='img'
					           src='./assets/bmi.jpg'
					           title='BMI 1'
					/>
					<CardContent>
                        <Typography variant='body2'
                                    component='p'>
                            This impressive paella is a perfect healthy dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
					</CardContent>
					<Collapse in={expanded}
					          timeout='auto'
					          unmountOnExit>
						<CardContent>
							<Typography paragraph>Method:</Typography>
							<Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                            </Typography>
							<Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
							<Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
                            </Typography>
							<Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
						</CardContent>
					</Collapse>
				</Card>
			</Paper>
		</Container>
	)
}

DietPage.routeName = '/diet'
DietPage.displayName = 'Optimal Diet'