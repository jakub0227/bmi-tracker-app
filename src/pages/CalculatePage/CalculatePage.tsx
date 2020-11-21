/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React, {FC} from 'react';
import {Route} from "../../types/Route";
import {AboutPage} from "../AboutPage/AboutPage";

interface CalculatePageProps {

}

export const CalculatePage: Route = () => {
    return (
        <div>
            Hello from our BMI Tracker
        </div>
    );
};

CalculatePage.routeName = '/'
CalculatePage.displayName = 'BMI Tracker'