import {FC} from "react";

export interface Route extends FC {
    routeName: string
    displayName: string
}