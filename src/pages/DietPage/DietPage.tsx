/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React, {FC} from 'react';
import {Route} from "../../types/Route";
import {AboutPage} from "../AboutPage/AboutPage";

interface DietPageProps {

}

export const DietPage: Route = props => {
    return (
        <div>
            We will advise and help you stay healthy !
        </div>
    );
};

DietPage.routeName = '/diet'
DietPage.displayName = 'Diet'