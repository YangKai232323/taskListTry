import { useState } from 'react'
import { Project, Task } from './types'
import { TaskList } from './TaskList'
import { ProjectList } from './ProjectList'

function App() {
    const [currentSiteState, changeSiteState] = useState<string>('active')

    const [projects, setProjects] = useState<Project[]>([
        {
            name: 'Initial project',
            tasks: [
                {
                    name: 'Initial task',
                    state: false,
                    value: 1,
                },
            ],
        },
    ])

    const [currentProject, changeProject] = useState<number>(0)

    const tasks = projects[currentProject].tasks as Task[]

    const [inputProjectName, setInputProjectName] = useState<string>('')

    function setTasks(tasks: Task[]) {
        setProjects(
            projects.map((project, curProjId) => {
                if (currentProject === curProjId) {
                    return {
                        name: project.name,
                        tasks,
                    }
                }
                return project
            })
        )
    }

    function addTask(task: Task) {
        setTasks([...tasks, task])
    }

    function addProject(project: Project) {
        setProjects([...projects, project])
    }

    if (currentSiteState === 'completed') {
        return (
            <>
                <div>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('active')
                        }}
                    >
                        Active
                    </button>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('projects')
                        }}
                    >
                        Projects
                    </button>
                </div>
                <TaskList tasks={tasks.filter((task) => task.state)}></TaskList>
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
                        }}
                    >
                        Completed
                    </button>
                    <button
                        className="font-bold m-4 text-xl bg-green-200 p-1 border-green-700 border-4"
                        onClick={() => {
                            changeSiteState('projects')
                        }}
                    >
                        Projects
                    </button>
                </div>
                <TaskList
                    tasks={tasks.filter((task) => !task.state) || []}
                    addTask={(taskName) => {
                        if (!taskName) {
                            return 'Please enter something to textspace'
                        }
                        addTask({
                            name: taskName,
                            state: false,
                            value: 10,
                        })
                        return 'All ok'
                    }}
                    nukeTasks={() => setTasks([])}
                    completeTask={(taskName) => {
                        setTasks(
                            tasks.map((task) => {
                                if (taskName === task.name) {
                                    return {
                                        ...task,
                                        state: true,
                                    }
                                }
                                return task
                            })
                        )
                        console.log('ALOHA')
                    }}
                    deleteTask={(taskName) => {
                        const tasksForSet = tasks.filter(
                            (task) => task.name !== taskName
                        )
                        setTasks(tasksForSet)
                    }}
                    editable
                ></TaskList>
            </>
        )
    } else if (currentSiteState === 'projects') {
        return (
            <ProjectList
                projects={projects}
                addProject={(projectName: string) => {
                    setProjects([
                        ...projects,
                        {
                            name: projectName,
                            tasks: [],
                        },
                    ])
                }}
                deleteProject={(projectName: string) => {
                    setProjects(
                        projects.filter(
                            (project) => project.name !== projectName
                        )
                    )
                }}
                setProject={changeProject}
            ></ProjectList>
        )
    }
    // ✔✔✓🗸✔
}

export default App
