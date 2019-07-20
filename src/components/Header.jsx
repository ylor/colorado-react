import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledHeader = styled.header`
	background: #000;
	box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`
const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	a {
		text-decoration: none;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		text-align: right;
	}

	li {
		display: block;
		padding: 0.5rem 0.25rem;
	}
	@media screen and (max-width: 480px) {
		li {
			display: block;
		}
	}
`

const StyledTitle = styled.h1`
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: -0.06ch;
	line-height: 0.9;
	margin: 1rem;
	text-align: left;
	font-size: 2rem;

	a {
		color: var(--heading-color);
		text-decoration: none;
	}
`

export default function Header() {
	return (
		<StyledHeader>
			<StyledNav>
				<StyledTitle>
					<Link to="/">
						The
						<br />
						Colorado <br />
						Experiment
					</Link>
				</StyledTitle>
				<ul>
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/exercises">
						<li>Exercises</li>
					</Link>
					<Link to="Rules">
						<li>Rules</li>
					</Link>
				</ul>
			</StyledNav>
		</StyledHeader>
	)
}
