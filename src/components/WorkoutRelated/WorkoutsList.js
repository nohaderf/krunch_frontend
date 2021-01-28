import React from "react"
import WorkoutCard from "./WorkoutCard"
// import {Link} from "react-router-dom"


function WorkoutsList({allWorkouts, onDelete}){

    const workoutsObj = allWorkouts.map(workout => {
        return <WorkoutCard
                    workout = {workout}
                    key = {workout.id}
                    onDeleteClick = {onDelete}
            />
    })
    return (
        <div className="workout-obj-parent">{workoutsObj}</div>    
    )
}

export default WorkoutsList;