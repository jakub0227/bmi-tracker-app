/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React, {FC} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {StylesProvider} from "@material-ui/core";
import {Layout} from "./hoc/Layout/Layout";
import {Theme} from "./hoc/Theme/Theme";
import {routeList} from "./hoc/Layout/Navigation/NavigationItems/routeList";


export const App: FC = () => {
    return (
        <BrowserRouter>
            <StylesProvider injectFirst>
                <Theme>
                    <Layout>
                        <Switch>
                            {routeList.map(route => (
                                <Route exact key={route.routeName} path={route.routeName} component={route}/>
                            ))}
                        </Switch>
                    </Layout>
                </Theme>
            </StylesProvider>
        </BrowserRouter>
    );
}
