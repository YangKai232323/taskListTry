import { Task } from './types'
import { useState } from 'react'
import {
    CheckCircleIcon,
    PlusCircleIcon,
    TrashIcon,
} from '@heroicons/react/24/outline'

interface Props {
    tasks: Task[]
    currentProject: string
    addTask?(taskName: string): string //string because we sent result to user
    deleteTask?(taskName: string): void
    completeTask?(taskName: string): void
    nukeTasks?(): void
    editable?: boolean
}

export function TaskList({
    tasks,
    addTask,
    deleteTask,
    completeTask,
    editable,
}: Props) {
    const [inputTaskName, setInputTaskName] = useState<string>('')

    const [isValid, setIsValid] = useState(true)

    return (
        <div className="relative">
            <ul className="text-lg overflow-auto">
                {tasks.map((task) => (
                    <li className="m-3 flex items-center justify-between rounded-lg px-3 py-1 shadow transition-all">
                        <p className="break-all">{task.name}</p>
                        {editable && (
                            <div>
                                <button
                                    type="button"
                                    className="m-2 mx-1"
                                    onClick={() => deleteTask?.(task.name)}
                                >
                                    <TrashIcon className="h-7 w-7 text-red-400" />
                                </button>
                                <button
                                    type="button"
                                    className="m-2 mr-0"
                                    onClick={() => completeTask?.(task.name)}
                                >
                                    <CheckCircleIcon className="h-7 w-7 text-emerald-400" />
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {editable && (
                <div className="absolute bottom-0 w-full p-3 bg-white">
                    <div className="flex justify-between gap-3 rounded-lg shadow">
                        <input
                            value={inputTaskName}
                            id="taskInput"
                            className="h-12 w-full bg-transparent p-3 outline-none"
                            type="text"
                            placeholder="Name"
                            onInput={(event: any) => {
                                setInputTaskName(event.target.value)
                                if (
                                    tasks.find(
                                        (task) =>
                                            task.name === event.target.value
                                    )
                                ) {
                                    setIsValid(false)
                                } else {
                                    setIsValid(true)
                                }
                            }}
                        />
                        {isValid ? (
                            <button
                                type="button"
                                className="aspect-square h-12 scale-90 rounded-lg bg-emerald-400 p-3 text-white transition-all active:scale-75 active:bg-emerald-300 md:hover:bg-emerald-300"
                                onClick={() => {
                                    if (!inputTaskName) {
                                        alert('Name is mandatory')
                                    } else {
                                        addTask?.(inputTaskName)
                                        setInputTaskName('')
                                    }
                                }}
                            >
                                <PlusCircleIcon />
                            </button>
                        ) : (
                            <p className="flex w-fit items-center justify-center whitespace-nowrap rounded-lg bg-red-400 px-2 font-bold text-white">
                                Name's taken
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
