import React from "react"
import data from "../data/rules.json"

export default function Rules() {
	console.log(data)

	return data.map(rule => (
		<ul key={rule.id + "-ul"}>
			<li key={rule.id}>
				{rule.rule}
				{rule.note ? (
					<ul key={rule.id + "-nested"}>
						<li key={rule.id + "-note"}>{rule.note}</li>
					</ul>
				) : (
					""
				)}
			</li>
		</ul>
	))
}
