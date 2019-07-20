import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledFooter = styled.footer`
	position: sticky;
	text-align: center;
`

export default function Footer() {
	return (
		<StyledFooter>
			<Link to="/about">Made with &hearts;</Link>
		</StyledFooter>
	)
}
