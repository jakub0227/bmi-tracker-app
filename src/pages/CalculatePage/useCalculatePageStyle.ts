import {css} from '@emotion/react'
import {useTheme} from '@material-ui/core'
import {ComponentStyleHook} from '../../types/ComponentStyleHook'

export const useCalculatePageStyle: ComponentStyleHook = props => {
	const theme = useTheme()
	
	return {
		root: css`
          margin: ${theme.spacing(2)}px auto;
          padding: ${theme.spacing(2)}px;
          ${theme.customMixins.flexCentered};
          flex-direction: column;
		`,
		buttonBase: css`
          margin-top: ${theme.spacing(5)}px;

          :hover {
            cursor: pointer;
            transform: scale(1.04);
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.12);
          }
		`,
		buttonCalc: css`
          background: linear-gradient(135deg, #ffec61 15%, #f321d7);
          width: 20vh;
          padding: ${theme.spacing(1.2)}px;
          border-radius: 50px;
		`,
		buttonReset: css`
          background: linear-gradient(135deg, #8a0185 15%, #64b5f6 80%);
          width: 20vh;
          border-radius: 50px;
		`,
		valueBMI: css`
          margin-top: ${theme.spacing(5)}px;
          padding: ${theme.spacing(1.5)}px;
		`,
		pictureBMI: css`
          margin: ${theme.spacing(3)}px auto;
          max-width: 80%;
          max-height: 250px;
          border-radius: 50px;
          object-fit: cover;
          opacity: 95%;
		`,
		formGrid: css`
          width: auto;
		
		`,
		slider: css`
          width: 200px;
		`,
	}
}