import {useTheme} from '@material-ui/core'
import {css} from '@emotion/react'
import {ComponentStyleHook} from '../../types/ComponentStyleHook'

export const useLayoutStyle: ComponentStyleHook = props => {
	const theme = useTheme()
	return {
		root: css`
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        `,
		page: css`
			${theme.customMixins.flexCentered};
            flex: 1;
            background: linear-gradient(135deg, #ffec61 15%, #f321d7);
        `,
		wrapper: css`
		    flex: 2;
		    ${theme.customMixins.flexCentered};
		    margin-top: ${theme.spacing(10)}px;
    		margin-bottom: ${theme.spacing(10)}px;
`,
		rootAllPages: css`
			margin-left: ${theme.spacing(15)}px auto;
`,
		paperPage: css`
	    	text-align: center;
			height: 100vh;
			background-color: rgba(66, 66, 66, 0.95);
			border-radius: 20px;
`,
		pageTitleText: css`
			padding-top: ${theme.spacing(10)}px;
			font-weight: bolder;
`,
	}
}