import React from "react"
import data from "../data/routine.json"

export default function Routine() {
	console.log(data)

	return data.map(routine => (
		<div className="day" key={routine.id}>
			<h1>
				{routine.wid === null
					? `${routine.day} - Off`
					: `Workout #${routine.wid} - ${routine.day}`}
			</h1>
			<ol>
				{routine.exercises.map(exercise => (
					<li key={exercise.name}>
						{exercise.negative ? exercise.name + " - Negative" : exercise.name}
					</li>
				))}
			</ol>
		</div>
	))
}
