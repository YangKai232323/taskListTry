import { BeakerIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Project, Task } from './types'
import { List } from './List'

function App() {
    const [currentSiteState, changeSiteState] = useState<string>('active')

    const [tasks, setTasks] = useState<Task[]>([
        {
            name: 'Initial task',
            state: false,
            value: 0,
        },
    ])

    const [currentProject, changeProject] = useState<Project[]>([
        {
            name: 'Initial project',
            tasks: tasks,
        },
    ])

    const [inputTaskName, setInputTaskName] = useState<string>('')

    const [inputProjectName, setInputProjectName] = useState<string>('')

    function clearInput() {
        setInputTaskName('')
    }

    function clearProjectInput() {
        setInputProjectName('')
    }

    function addTask(task: Task) {
        setTasks([...tasks, task])
    }

    function addProject(project: string) {
        setProjects([...projects, project])
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

    const [projects, setProjects] = useState<string[]>(['Initial project'])

    if (currentSiteState === 'completed') {
        return (
            <>
                <div>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('active')
                            clearInput()
                        }}
                    >
                        Active
                    </button>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('projects')
                            clearInput()
                        }}
                    >
                        Projects
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
                            changeSiteState('completed')
                            clearInput()
                        }}
                    >
                        Completed
                    </button>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('projects')
                            clearInput()
                        }}
                    >
                        Projects
                    </button>
                </div>
                <List
                    tasks={tasks}
                    addTask={(taskName) => {
                        if (!taskName) {
                            return 'Please enter something to textspace'
                        }
                        setTasks([
                            ...tasks,
                            {
                                name: taskName,
                                state: false,
                            },
                        ])
                        return 'All ok'
                    }}
                    nukeTasks={() => setTasks([])}
                    completeTask={(taskName) => {
                        const filteredTask = tasks.filter(
                            (currentTask) => currentTask.name === taskName
                        )[0]
                        filteredTask.state = true
                    }}
                    deleteTask={(taskName) => {
                        const tasksForSet = tasks.filter(
                            (task) => task.name !== taskName
                        )
                        setTasks(tasksForSet)
                    }}
                ></List>
            </>
        )
    } else if (currentSiteState === 'projects') {
        return (
            <>
                <div>
                    <p>Projects Page</p>
                    <br />
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('active')
                            clearInput()
                        }}
                    >
                        Active
                    </button>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('completed')
                            clearInput()
                        }}
                    >
                        Completed
                    </button>
                </div>
                <div>
                    <ul>
                        {projects.map((project, projectIndex) => (
                            <li className="rounded-xl font-bold m-4 text-2xl w-fit p-2 border-gray-500 border-4 flex items-center">
                                <button
                                    onClick={() =>
                                        changeProject([
                                            {
                                                name: project,
                                                completePercents: 0,
                                                tasks: [],
                                            },
                                        ])
                                    }
                                >
                                    {project}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter project name"
                        className="text-2xl p-1 m-1 ml-3 rounded-lg border-slate-500 border-4 items-center justify-center flex mt-4"
                        onInput={(event: any) =>
                            setInputProjectName(event.target.value)
                        }
                    />
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => addProject(inputProjectName)}
                    >
                        Create project
                    </button>
                </div>
            </>
        )
    }
    // ✔✔✓🗸✔
}

export default App
