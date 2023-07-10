import { Task } from './types'
import { useState } from 'react'
import { CheckCircleIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'

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
        <div className="">
            <ul className="text-lg">
                {tasks.map((task) => (
                    <li className="rounded-lg m-3 px-3 py-1 shadow transition-all flex items-center justify-between">
                        <p className="break-all">{task.name}</p>
                        {editable && (
                            <div>
                                <button
                                    type="button"
                                    className="m-2 mx-1"
                                    onClick={() => deleteTask?.(task.name)}
                                >
                                    <TrashIcon className="w-7 h-7 text-red-400" />
                                </button>
                                <button
                                    type="button"
                                    className="m-2 mr-0"
                                    onClick={() => completeTask?.(task.name)}
                                >
                                    <CheckCircleIcon className="w-7 h-7 text-emerald-400" />
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {editable && (
                <div className="p-3 fixed bottom-0 w-full">
                    <div className="flex justify-between gap-3 shadow rounded-lg">
                        <input
                            value={inputTaskName}
                            id="taskInput"
                            className="h-12 p-3 bg-transparent w-full outline-none"
                            type="text"
                            placeholder="Name"
                            onInput={(event: any) => {
                                setInputTaskName(event.target.value)
                                if (
                                    tasks.find(
                                        (task) => task.name === event.target.value
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
                                className="h-12 aspect-square rounded-lg text-white bg-emerald-400 p-3 scale-90 active:scale-75 active:bg-emerald-300 md:hover:bg-emerald-300 transition-all"
                                onClick={() => {
                                    if (!inputTaskName) {
                                        alert(
                                            'Name is mandatory'
                                        )
                                    } else {
                                        addTask?.(inputTaskName)
                                        setInputTaskName('')
                                    }
                                }}
                            >
                                <PlusCircleIcon />
                            </button>
                        ) : (
                            <p className="flex justify-center items-center rounded-lg px-2 w-fit text-white bg-red-400 font-bold whitespace-nowrap">
                                Name's taken
                            </p>
                        )}

                    </div>
                </div>
            )}
        </div>
    )
}
