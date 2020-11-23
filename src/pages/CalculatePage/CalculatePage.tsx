/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import {Paper, useTheme, Container, Typography, TextField, FormControl, Button} from "@material-ui/core";
import React from 'react';
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
        buttonReset: css`
    margin-top: ${theme.spacing(10)}px;
    background: linear-gradient(135deg, #8a0185 15% , #64b5f6 80% );
    width: 20vh;
`

    }
    return (
        <Container css={styles.root}>
            <Paper css={styles.paper} elevation={5}>
                <Typography css={styles.titleText} variant="h4">Hello from BMI calculator !</Typography>
                <form>
                    <FormControl size="medium">
                        <Typography variant="h6">Height [cm]</Typography>
                        <TextField label="Type your height" variant="outlined"/>
                        <Typography variant="h6">Weight [kg]</Typography>
                        <TextField label="Type your weight" variant="outlined"/>
                    </FormControl>
                </form>

                <Button css={styles.buttonReset} variant="contained" size="large" color="inherit">Reset</Button>
            </Paper>
        </Container>
    );
};

CalculatePage.routeName = '/'
CalculatePage.displayName = 'BMI Tracker'