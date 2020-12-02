/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Box, Icon} from '@material-ui/core'
import {Fragment} from 'react'
import {Route} from '../../types/Route'
import {useCalculatePageStyle} from './useCalculatePageStyle'
import logo from '../../assets/logo.jpg'
import {PageTitle} from '../shared/PageTitle/PageTitle'
import {CalculatePageForm} from './CalculatePageForm/CalculatePageForm'

export const CalculatePage: Route = (props) => {
	const styles = useCalculatePageStyle()
	
	return (
		<Fragment>
			<PageTitle>
				Hello from BMI Tracker!
			</PageTitle>
			<Box>
				<img src={logo} alt='BMI' css={styles.pictureBMI}/>
			</Box>
			<CalculatePageForm/>
		</Fragment>
	)
}

CalculatePage.routeName = '/'
CalculatePage.displayName = 'BMI Tracker'
CalculatePage.icon = 'home'