/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import {
    Box,
    Paper,
    useTheme,
    Container,
    Typography,
    TextField,
    FormControl,
    Button,
    ButtonGroup,
} from "@material-ui/core";
import React, {useState} from 'react';
import {Route} from "../../types/Route";


export const CalculatePage: Route = () => {
    const theme = useTheme();
    const styles = {
        root: css`
    flex-direction: column;    
`,
        paper: css`        
    text-align: center;    
    margin-top: ${theme.spacing(10)}px;
    margin-bottom: ${theme.spacing(10)}px;
    align-items: center;
    justify-content: center;
    height: 100vh; 
`,
        titleText: css`
    padding-top: ${theme.spacing(10)}px;
`,
        form: css`
    margin: ${theme.spacing(10)}px auto;
    padding: ${theme.spacing(2)}px;
    
`,
        buttonBase: css`
    margin-top: ${theme.spacing(15)}px;

`,
        buttonCalc: css`
    
    background: linear-gradient(135deg, #ffec61 15% , #f321d7);
    width: 20vh;
    padding: ${theme.spacing(1.2)}px;
`,
        buttonReset: css`
    
    background: linear-gradient(135deg, #8a0185 15% , #64b5f6 80% );
    width: 20vh;
`,
        valueBMI: css`
    margin-top: ${theme.spacing(5)}px;
    padding: ${theme.spacing(1.5)}px;
`
    }
// ***** Parameters States *****

//     const [height, setHeight] = useState(0)
//     const [weight, setWeight] = useState(0)

// ***** Calculations & formulas *****

    // const calculateBMI = () => {
    //     let bmi = ((weight / height / height) * 10000).toFixed(2);
    // }

// ***** BMI categories & alert class *****

    //
    // const getBmiClass = (bmi) => {
    //     if(bmi < 18.5) return 'Underweight'; // + snackbar alert error
    //     if(bmi >= 18.5 && bmi <= 24.9) return 'Normal'; // + snackbar alert success
    //     if(bmi >= 25 && bmi <= 29.9) return 'Overweight'; // + snackbar alert error
    //     if(bmi >= 30) return 'Obese'; // + snackbar alert ultra-error
    // }

    return (
        <Container css={styles.root}>
            <Paper css={styles.paper} elevation={5}>
                <Typography css={styles.titleText} variant="h4">Hello from BMI Tracker !</Typography>
                <form css={styles.form}>
                    <FormControl size="medium">
                        <Typography variant="h6">Height [ cm ]</Typography>
                        <TextField label="Type your height" variant="outlined" required>
                        </TextField>
                        <Typography variant="h6">Weight [ kg ]</Typography>
                        <TextField label="Type your weight" variant="outlined" required>
                        </TextField>
                    </FormControl>
                </form>
                <Box css={styles.valueBMI}>
                    <Typography variant="h5">BMI value :</Typography>
                </Box>
                <ButtonGroup css={styles.buttonBase}>
                    <Button css={styles.buttonCalc} variant="contained"
                            color="inherit">Calculate BMI</Button>
                    <Button css={styles.buttonReset} variant="contained"
                            color="inherit">Reset</Button>
                </ButtonGroup>
            </Paper>
        </Container>
    );
};

CalculatePage.routeName = '/'
CalculatePage.displayName = 'BMI Tracker'