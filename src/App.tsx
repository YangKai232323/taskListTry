import { BeakerIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface Task {
    name: string
    state: boolean
    value?: number
}

function App() {
    // const currentSiteState = 'completed'
    const [currentSiteState, changeSiteState] = useState<string>('active')

    const [tasks, setTasks] = useState<Task[]>([
        {
            name: 'Initial task',
            state: false,
            value: 0,
        },
    ])

    const [inputTaskName, setInputTaskName] = useState<string>('')

    function clearInput(inputTaskName: string) {
        setInputTaskName('')
    }

    function addTask(task: Task) {
        setTasks([...tasks, task])
    }

    const [completedTasks, setCompletedTasks] = useState<Task[]>([
        {
            name: 'Auto-completed task',
            state: true,
            value: 0,
        },
    ])

    function addCompletedTask(task: Task) {
        setCompletedTasks([...completedTasks, task])
    }

    console.log(tasks)

    if (currentSiteState === 'completed') {
        return (
            <>
                <div>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('active')
                            clearInput(inputTaskName)
                        }}
                    >
                        Active
                    </button>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('completed')
                            clearInput(inputTaskName)
                        }}
                    >
                        Completed
                    </button>
                </div>
                <div>
                    <ul>
                        {completedTasks.map((task, taskIndex) => (
                            <li className="rounded-xl font-bold m-4 text-2xl w-fit p-2 border-gray-500 border-4 flex items-center">
                                {task.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    } else if (currentSiteState === 'active') {
        return (
            <>
                <div>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('active')
                            clearInput(inputTaskName)
                        }}
                    >
                        Active
                    </button>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('completed')
                            clearInput(inputTaskName)
                        }}
                    >
                        Completed
                    </button>
                </div>
                <div className="rounded-2xl border-neutral-500 bg-zinc-300 border-8 m-4 w-fit h-fit">
                    <ul className="border-b-8 border-slate-400">
                        {tasks.map((task, taskIndex) => (
                            <li className="rounded-xl font-bold m-4 text-2xl w-fit p-2 border-gray-500 border-4 flex items-center">
                                {task.name}
                                {task.state && (
                                    <small className="mx-1">completed</small>
                                )}
                                <button
                                    type="button"
                                    className="hover:rounded-md hover:scale-75 text-3xl border-black border-2 m-2"
                                    onClick={() => {
                                        setTasks(
                                            // tasks.filter(
                                            //     (_, idx) => idx != taskIndex
                                            // )

                                            tasks.map((task, idx) => {
                                                // if (taskIndex === idx) {
                                                //     task.state = true
                                                // }
                                                // return task
                                                if (taskIndex === idx) {
                                                    task.state = true
                                                    addCompletedTask(task)
                                                }
                                                return task
                                            })
                                        )
                                        setTasks(
                                            tasks.filter(
                                                (_, idx) => idx != taskIndex
                                            )
                                        )
                                    }}
                                >
                                    <CheckIcon className="w-7 h-7" />
                                </button>
                                <button
                                    type="button"
                                    className="hover:rounded-md hover:scale-75 text-3xl border-black border-2 m-2"
                                    onClick={() => {
                                        setTasks(
                                            tasks.filter(
                                                (_, idx) => idx != taskIndex
                                            )
                                        )
                                    }}
                                >
                                    <XMarkIcon className="w-7 h-7" />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <input
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
                                addTask({
                                    name: inputTaskName || '',
                                    state: false,
                                    value: 100000,
                                })
                            }
                        }}
                    >
                        Add Task
                    </button>

                    <button
                        type="button"
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            setTasks([])
                        }}
                    >
                        Delete All Tasks
                    </button>
                </div>
            </>
        )
    }
    // ✔✔✓🗸✔
}

export default App
