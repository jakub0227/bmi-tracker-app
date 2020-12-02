import {css} from '@emotion/react'
import {useTheme} from '@material-ui/core'
import {ComponentStyleHook} from '../../../types/ComponentStyleHook'

export const useAboutPageCarouselStyle: ComponentStyleHook = props => {
	const theme = useTheme()
	
	return {
		root: css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin: ${theme.spacing(3)}px auto;
          padding: ${theme.spacing(2)}px;
		`,
		carousel: css`
          text-align: center;
          margin: auto;
          padding: ${theme.spacing(3)}px;
          max-width: 720px;
          box-shadow: none;
          border-radius: 20px;
		`,
		buttons: css`
          background: linear-gradient(135deg, #8a0185 15%, #64b5f6 80%);
          width: 65%;
          margin: auto;
          padding: ${theme.spacing(1.2)}px;
          border-radius: 20px;
		`,
	}
}