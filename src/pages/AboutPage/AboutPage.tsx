/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react';
import {Route} from "../../types/Route";


export const AboutPage: Route = (props) => {
    return (
        <div>
            About our app !
        </div>
    );
};

AboutPage.routeName = '/about'
AboutPage.displayName = 'About'