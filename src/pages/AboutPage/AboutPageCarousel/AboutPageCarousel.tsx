/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Box, Button, Icon, MobileStepper, Paper, Typography, useTheme} from '@material-ui/core'
import {useState} from 'react'
import {FC} from 'react'
import {useAboutPageCarouselStyle} from './useAboutPageCarouselStyle'

const tutorialSteps = [
	{
		label: 'Feeling bad about your health & diet ?',
		imgPath:
			'https://images.unsplash.com/photo-1531928351158-2f736078e0a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=60',
	},
	{
		label: 'Implement now Weight Loss strategy with our app!',
		imgPath:
			'https://images.unsplash.com/photo-1604480132715-bd70038b74df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=60',
	},
	{
		label: 'Its very simple - remember about BMI Tracker advises!',
		imgPath:
			'https://images.unsplash.com/photo-1603804449778-de9ddafbb4ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=60',
	},
	{
		label: 'Change your life from this...',
		imgPath:
			'https://images.unsplash.com/flagged/photo-1557040430-fe79b4234586?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&h=250&q=60',
	},
	{
		label: '...Into that !',
		imgPath:
			'https://images.unsplash.com/photo-1542986130-d0c46350cf30?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&h=250&q=60',
	},
]

export const AboutPageCarousel: FC = () => {
	const styles = useAboutPageCarouselStyle()
	const theme = useTheme()
	const [activeStep, setActiveStep] = useState(0)
	const maxSteps = tutorialSteps.length
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}
	
	return (
		<Paper css={styles.root} square elevation={0}>
			<Typography variant='h5'>{tutorialSteps[activeStep].label}</Typography>
			<img css={styles.carousel}
			     src={tutorialSteps[activeStep].imgPath}
			     alt={tutorialSteps[activeStep].label}
			/>
			<MobileStepper css={styles.buttons} steps={maxSteps}
			               position='static'
			               variant='text'
			               activeStep={activeStep}
			               nextButton={
				               <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
					               Next
					               {theme.direction === 'rtl' ? <Icon>keyboard_arrow_right</Icon> :
						               <Icon>keyboard_arrow_right</Icon>}
				               </Button>
			               }
			               backButton={
				               <Button size='small' onClick={handleBack}
				                       disabled={activeStep === 0}>
					               {theme.direction === 'rtl' ? <Icon>keyboard_arrow_left</Icon> :
						               <Icon>keyboard_arrow_left</Icon>}
					               Back
				               </Button>
			               }
			/>
		</Paper>
	
	)
}