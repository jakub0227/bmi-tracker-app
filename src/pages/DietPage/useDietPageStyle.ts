import {css} from '@emotion/react'
import {useTheme} from '@material-ui/core'
import {ComponentStyleHook} from '../../types/ComponentStyleHook'

export const useDietPageStyle: ComponentStyleHook = props => {
	const theme = useTheme()
	
	return {
		root: css`
          margin: ${theme.spacing(2)}px auto;
          padding: ${theme.spacing(2)}px;
          ${theme.customMixins.flexCentered};
          flex-direction: column;
		`,
		cardRoot: css`
          margin: auto;
          max-width: 608px;
          transition: 0.3s cubic-bezier(.47, 1.64, .41, .8);
          box-shadow: none;
          border-radius: 20px;

          :hover {
            cursor: pointer;
            transform: scale(1.04);
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.12);
          }
		`,
		cardMedia: css`
          margin-top: ${theme.spacing(3)}px;
		`,
	}
}