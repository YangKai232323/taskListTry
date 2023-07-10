import { useState } from 'react'
import { Task } from './types'
import { PlusCircleIcon } from '@heroicons/react/24/outline'

interface Props {
    tasks: Task[]
    onAdd(taskName: string): void
}

export function TaskAdd({ tasks, onAdd }: Props) {
    const [taskName, setTaskName] = useState<string>('')

    const [valid, setValid] = useState(true)

    function addTask() {
        if (!taskName) {
            alert('Name is mandatory')
        } else {
            if (valid) {
                onAdd(taskName)
                setTaskName('')
            }
        }
    }

    return (
        <div className="m-3 flex justify-between gap-3 rounded-xl shadow">
            <input
                value={taskName}
                id="taskInput"
                className="h-12 w-full bg-transparent p-3 outline-none"
                type="text"
                placeholder="Name"
                onInput={(event: any) => {
                    setTaskName(event.target.value)
                    if (
                        tasks.find((task) => task.name === event.target.value)
                    ) {
                        setValid(false)
                    } else {
                        setValid(true)
                    }
                }}
                onKeyDown={(event: any) => {
                    if (event.key === 'Enter') addTask()
                }}
            />
            {valid ? (
                <button
                    type="button"
                    className="aspect-square h-12 scale-90 rounded-xl bg-emerald-400 p-3 text-white transition-all active:scale-75 active:bg-emerald-300 md:hover:bg-emerald-300"
                    onClick={addTask}
                >
                    <PlusCircleIcon />
                </button>
            ) : (
                <p className="flex w-fit items-center justify-center whitespace-nowrap rounded-xl bg-red-400 px-2 font-bold text-white">
                    Name's taken
                </p>
            )}
        </div>
    )
}
