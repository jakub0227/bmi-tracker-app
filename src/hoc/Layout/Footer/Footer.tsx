/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react'
import React, {FC} from 'react';
import Paper from "@material-ui/core/Paper";
import useTheme from "@material-ui/core/styles/useTheme";
import {Typography} from "@material-ui/core";

export const Footer: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
    width: 100%;
    padding: ${theme.spacing(1.5)}px;
    opacity: 95%;            
        `,
    }

    return (
        <Paper square elevation={8} css={styles.root} component='footer'>
            <Typography align='center' variant='subtitle2'>
                Created with React, Emotion.sh, Material-UI (C) Copyright {new Date().getFullYear()}
            </Typography>
        </Paper>
    );
};