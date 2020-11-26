/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Box, Button, ButtonGroup, Container, FormControl, Paper, TextField, Typography} from '@material-ui/core'
import React from 'react'
import {Route} from '../../types/Route'
import {useCalculatePageStyle} from './useCalculatePageStyle'
import {useLayoutStyle} from '../../hoc/Layout/useLayoutStyle'

export const CalculatePage: Route = (props) => {
	const styles = useLayoutStyle()
	const stylesCustom = useCalculatePageStyle()
	
	return (
		<Container>
			<Paper css={styles.paperPage} elevation={5}>
				<Typography css={styles.pageTitleText} variant='h4'>Hello from BMI Tracker !</Typography>
				<form css={stylesCustom.form}>
					<FormControl size='medium'>
						<Typography variant='h6'>Height [ cm ]</Typography>
						<TextField label='Type your height' variant='outlined' required>
						</TextField>
						<Typography variant='h6'>Weight [ kg ]</Typography>
						<TextField label='Type your weight' variant='outlined' required>
						</TextField>
					</FormControl>
				</form>
				<Box css={stylesCustom.valueBMI}>
					<Typography variant='h5'>BMI value :</Typography>
				</Box>
				<ButtonGroup css={stylesCustom.buttonBase}>
					<Button css={stylesCustom.buttonCalc} variant='contained'
					        color='inherit'>Calculate BMI</Button>
					<Button css={stylesCustom.buttonReset} variant='contained'
					        color='inherit'>Reset</Button>
				</ButtonGroup>
			</Paper>
		</Container>
	)
}

CalculatePage.routeName = '/'
CalculatePage.displayName = 'BMI Tracker'