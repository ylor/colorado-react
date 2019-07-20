import React from "react"
import data from "../data/routine.json"

export default function Routine() {
	return data.map(routine => (
		<div className="day" key={routine.id}>
			<h1>{routine.wid === null ? `Off` : `Workout #${routine.wid}`}</h1>
			<ol>
				{routine.exercises.map(exercise => (
					<li key={exercise.id}>
						{exercise.name}
						{exercise.negative ? <span> &mdash; Negative</span> : null}
					</li>
				))}
			</ol>
			<hr />
		</div>
	))
}
