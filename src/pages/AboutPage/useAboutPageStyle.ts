import {css} from '@emotion/react'
import {useTheme} from '@material-ui/core'
import {ComponentStyleHook} from '../../types/ComponentStyleHook'

export const useAboutPageStyle: ComponentStyleHook = props => {
	const theme = useTheme()
	
	return {
		root: css`
          margin: ${theme.spacing(3)}px auto;
          padding: ${theme.spacing(2)}px;
          ${theme.customMixins.flexCentered};
          flex-direction: column;
		`,
		cardRoot: css`
          text-align: justify;
          margin: auto;
          padding: ${theme.spacing(3)}px;
          max-width: 720px;
          box-shadow: none;
          border-radius: 20px;
		`,
	}
}