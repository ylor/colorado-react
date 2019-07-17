import React from "react"
import data from "../data/exercises.json"

export default function Exercises() {
	console.log(data)
	return data.map(exercise => (
		<div key={exercise.id}>
			<h1>
				<a href={exercise.link}>{exercise.name}</a>
			</h1>
			<p>{exercise.description}</p>
		</div>
	))
}
