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
          transition: 0.3s cubic-bezier(.47, 1.64, .41, .8);
          border-radius: 20px;

          :hover {
            cursor: pointer;
            transform: scale(1.04);
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.12);
          }
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