import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import Button from './Button'

const TaskDetails = () => {
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState({})
    const [error, setError] = useState("")

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            if (res.status === 404) {
                setError("Task not found")
                navigate("/")
            }

            setTask(data)
            setLoading(false)
        }

        fetchTask()
    }, [])

    if (error) {
        console.log(error)
    }

    return loading ? (
        <h3>Loading</h3>
    ) : (
        <div>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <Button text="Go back" onClick={() => (
                navigate(-1)
            )} />
        </div>
    )
}

export default TaskDetails