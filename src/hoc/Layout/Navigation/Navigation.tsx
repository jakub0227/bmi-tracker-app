/** @jsxRuntime classic */
/** @jsx jsx  */
import {jsx, css} from "@emotion/react";
import React, {FC} from "react";
import {useTheme} from "@material-ui/core";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

import {NavigationItems} from "./NavigationItems/NavigationItems";
import Icon from "@material-ui/core/Icon";

export const Navigation: FC = () => {
    const theme = useTheme();
    const styles = {
        root: css`
      margin-right: ${theme.spacing(4)} px;
      background: linear-gradient(135deg, #8a0185 15% , #64b5f6 80% );
      display: flex;      
      opacity: 95%;      
    `,
        toolBar: css`        
    `,
        title: css`
      flex-grow: 1;
    `,
    };

    return (
        <AppBar css={styles.root} position="static" color={"primary"}>
            <Toolbar css={styles.toolBar} variant="dense">
                <Icon fontSize="large">fitness_center</Icon>
                <Typography variant="h6" css={styles.title}>
                    Your Personal: BMI Tracker
                </Typography>
                <NavigationItems/>
            </Toolbar>
        </AppBar>
    );
};