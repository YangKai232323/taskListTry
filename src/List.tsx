import { Task } from './types'
import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
    tasks: Task[]
    addTask(taskName: string): string //string because we sent result to user
    deleteTask(taskName: string): void
    completeTask(taskName: string): void
    nukeTasks(): void
}

export function List({
    tasks,
    addTask,
    deleteTask,
    completeTask,
    nukeTasks,
}: Props) {
    const [inputTaskName, setInputTaskName] = useState<string>('')

    return (
        <div className="rounded-2xl border-neutral-500 bg-zinc-300 border-8 m-4 w-fit h-fit">
            <ul className="border-b-8 border-slate-400">
                {tasks.map((task) => (
                    <li className="rounded-xl font-bold m-4 text-2xl w-fit p-2 border-gray-500 border-4 flex items-center">
                        {task.name}
                        <button
                            type="button"
                            className="hover:rounded-md hover:scale-75 text-3xl border-black border-2 m-2"
                            onClick={() => completeTask(task.name)}
                        >
                            <CheckIcon className="w-7 h-7" />
                        </button>
                        <button
                            type="button"
                            className="hover:rounded-md hover:scale-75 text-3xl border-black border-2 m-2"
                            onClick={() => deleteTask(task.name)}
                        >
                            <XMarkIcon className="w-7 h-7" />
                        </button>
                    </li>
                ))}
            </ul>
            <input
                id="taskInput"
                className="text-2xl p-1 m-1 ml-3 rounded-lg border-slate-500 border-4 items-center justify-center flex mt-4"
                type="text"
                placeholder="Enter task name"
                onInput={(event: any) => {
                    setInputTaskName(event.target.value)
                }}
            />
            <button
                type="button"
                className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4 mr-0"
                onClick={() => {
                    if (
                        inputTaskName === '' ||
                        inputTaskName === undefined ||
                        inputTaskName === null
                    ) {
                        alert('Please, enter something before add task')
                    } else {
                        addTask(inputTaskName)
                    }
                }}
            >
                Add Task
            </button>

            <button
                type="button"
                className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                onClick={() => {
                    nukeTasks
                }}
            >
                Delete All Tasks
            </button>
        </div>
    )
}
