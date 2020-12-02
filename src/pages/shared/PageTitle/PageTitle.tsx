/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import {FC} from 'react'
import {Typography, useTheme} from '@material-ui/core'

interface PageTitleProps {
	children: string
}

export const PageTitle: FC<PageTitleProps> = (props) => {
	const theme = useTheme()
	const styles = {
		pageTitleText: css`
			padding-top: ${theme.spacing(10)}px;
			font-weight: bolder;
`,
	}
	
	return (
		<div>
			<Typography css={styles.pageTitleText} variant='h4'>
				{props.children}
			</Typography>
		</div>
	)
}