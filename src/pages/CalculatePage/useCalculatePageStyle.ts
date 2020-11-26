import {css} from '@emotion/react'
import {useTheme} from '@material-ui/core'
import {ComponentStyleHook} from '../../types/ComponentStyleHook'

export const useCalculatePageStyle: ComponentStyleHook = props => {
	const theme = useTheme()
	
	return {
		form: css`
    margin: ${theme.spacing(10)}px auto;
    padding: ${theme.spacing(2)}px;
`,
		buttonBase: css`
    margin-top: ${theme.spacing(15)}px;
`,
		buttonCalc: css`
    
    background: linear-gradient(135deg, #ffec61 15% , #f321d7);
    width: 20vh;
    padding: ${theme.spacing(1.2)}px;
`,
		buttonReset: css`
    
    background: linear-gradient(135deg, #8a0185 15% , #64b5f6 80% );
    width: 20vh;
`,
		valueBMI: css`
    margin-top: ${theme.spacing(5)}px;
    padding: ${theme.spacing(1.5)}px;
`,
	}
}