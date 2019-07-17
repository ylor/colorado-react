import React from "react"
import data from "../data/exercises.json"

export default function Exercises() {
	return data.map(exercise => (
		<div key={exercise.id}>
			<ul>
				<li>
					<a href={exercise.link}>{exercise.name}</a> &mdash;{" "}
					{exercise.description}
				</li>
			</ul>
		</div>
	))
}
