import React from "react"
import data from "../data/rules.json"

export default function Rules() {
	console.log(data)

	return data.map(rule => (
		<div key={"rule-" + rule.id}>
			<ul>
				<li>
					{rule.rule}
					{rule.note ? (
						<ul>
							<li>{rule.note}</li>
						</ul>
					) : null}
				</li>
			</ul>
		</div>
	))
}
