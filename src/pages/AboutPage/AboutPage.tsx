/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import React from 'react';
import {Route} from "../../types/Route";
import {Container, Paper, Typography, useTheme} from "@material-ui/core";


export const AboutPage: Route = (props) => {
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

`
    }
    return (
        <Container css={styles.root}>
            <Paper css={styles.paper} elevation={5}>
                <Typography css={styles.titleText} variant="h4">Hello from About section !</Typography>
            </Paper>
        </Container>
    );
};

AboutPage.routeName = '/about'
AboutPage.displayName = 'About'