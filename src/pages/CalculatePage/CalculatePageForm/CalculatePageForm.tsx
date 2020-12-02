/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import React, {Dispatch, FC, Fragment, SetStateAction, useEffect, useState} from 'react'
import {
	Box,
	Button,
	ButtonGroup,
	Grid,
	Slider,
	Typography,
} from '@material-ui/core'
import {useCalculatePageStyle} from '../useCalculatePageStyle'

export const CalculatePageForm: FC = () => {
	const styles = useCalculatePageStyle()
	const [height, setHeight] = useState(100)
	const [weight, setWeight] = useState(30)
	
	const getBmiAnalysis = (bm: number) => {
		if (bm >= 18.5 && bm <= 24.99) {
			return 'You are in a healthy weight range'
		} else if (bm >= 25 && bm <= 29.9) {
			return 'You are overweight'
		} else if (bm >= 30) {
			return 'You are obese'
		} else if (bm < 18.5) {
			return 'You are under weight'
		}
	}
	
	const [bmi, setBmi] = useState<number | null>(null)
	
	const calculateBMI = (
		height: number,
		weight: number,
	) => {
		const _bmi = weight / ((height / 100) ** 2)
		setBmi(_bmi)
	}
	
	useEffect(() => {
		if (localStorage.bmi && localStorage.height && localStorage.weight) {
			setBmi(+localStorage.bmi)
			setHeight(+localStorage.height)
			setWeight(+localStorage.weight)
		}
	}, [])
	
	useEffect(() => {
		localStorage.bmi = bmi
		localStorage.height = height
		localStorage.weight = weight
	}, [bmi, height, weight])
	
	const handleClick = (e: React.ChangeEvent<{}>) => {
		calculateBMI(height, weight)
		e.preventDefault()
	}
	
	const handleReset = async () => {
		setHeight(0)
		setWeight(0)
		setBmi(null)
	}
	
	const FORM_DATA: {
		name: string
		unit: string
		min: number
		max: number
		value: number
		setValue: Dispatch<SetStateAction<number>>
	}[] = [
		{
			name: 'Height',
			unit: 'cm',
			min: 100,
			max: 220,
			value: height,
			setValue: setHeight,
		},
		{
			name: 'Weight',
			unit: 'kg',
			min: 30,
			max: 220,
			value: weight,
			setValue: setWeight,
		},
	]
	
	return (
		<div css={styles.root}>
			{FORM_DATA.map(({max, min, name, unit, value, setValue}) => (
				<div key={name}>
					<Typography variant='h6'>{name}</Typography>
					<Grid container spacing={2} css={styles.formGrid}>
						{[
							<Slider
								value={value}
								valueLabelFormat={(value) => `${value} ${unit}`}
								valueLabelDisplay='auto'
								min={min}
								max={max}
								css={styles.slider}
								color='secondary'
								onChange={(_, val) => !Array.isArray(val) && setValue(val)}
							/>,
							<Typography>{unit}</Typography>,
						].map((el, i) => (
							<Grid item key={i}>
								{el}
							</Grid>
						))}
					</Grid>
				</div>
			))}
			{bmi && (
				<Box css={styles.valueBMI}>
					<Typography variant='h6'>BMI value: {bmi.toFixed(0)}</Typography>
					<Typography variant='h5'>Result of analysis: {getBmiAnalysis(bmi)}</Typography>
				</Box>
			)}
			<ButtonGroup css={styles.buttonBase}>
				<Button
					css={styles.buttonCalc}
					variant='outlined'
					color='inherit'
					onClick={handleClick}
				>
					Calculate BMI
				</Button>
				<Button
					css={styles.buttonReset}
					variant='outlined'
					color='inherit'
					onClick={handleReset}
				>
					Reset
				</Button>
			</ButtonGroup>
		</div>
	)
}
