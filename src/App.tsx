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
    const [tasks, setTasks] = useState<Task[]>([
        {
            name: 'Initial task',
            state: false,
            value: 0,
        },
    ])

    function addTask(task: Task) {
        setTasks([...tasks, task])
    }

    console.log(tasks)

    return (
        <>
            <div className="rounded-2xl border-neutral-500 bg-zinc-300 border-8 m-4 w-fit h-fit">
                <ul>
                    {tasks.map((task) => (
                        <li className="rounded-xl font-bold m-4 text-2xl w-fit p-2 border-gray-500 border-4 flex items-center">
                            {task.name}
                            <button
                                type="button"
                                className="hover:rounded-md hover:scale-75 text-3xl border-black border-2 m-2"
                            >
                                <CheckIcon className="w-7 h-7" />
                            </button>
                            <button
                                type="button"
                                className="hover:rounded-md hover:scale-75 text-3xl border-black border-2 m-2"
                            >
                                <XMarkIcon className="w-7 h-7" />
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4 mr-0"
                    onClick={() => {
                        addTask({
                            name: 'Second task',
                            state: true,
                            value: 100000,
                        })
                    }}
                >
                    Add Task
                </button>

                <button
                    type="button"
                    className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                >
                    Delete Task
                </button>
            </div>
        </>
    )
    // ✔✔✓🗸✔
}

export default App
