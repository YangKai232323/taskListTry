import { useState } from 'react'
import { PageType, Project, Task } from './types'
import { TaskList } from './TaskList'
import { ProjectList } from './ProjectList'
import { Navigation } from './Navigation'

function App() {
    const [currentPage, setCurrentPage] = useState<PageType>(PageType.Active)

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

    const [currentProject, setProject] = useState<number>(0)

    const tasks = projects[currentProject].tasks as Task[]

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

    if (currentPage === PageType.Completed) {
        return (
            <div>
                <Navigation
                    currentPage={currentPage}
                    changeCurrentPage={setCurrentPage}
                ></Navigation>
                {tasks.filter((task) => task.state).length > 0 ? (
                    <TaskList
                        tasks={tasks.filter((task) => task.state)}
                    ></TaskList>
                ) : (
                    <p>No completed tasks</p>
                )}
            </div>
        )
    } else if (currentPage === PageType.Active) {
        return (
            <div>
                <Navigation
                    currentPage={currentPage}
                    changeCurrentPage={setCurrentPage}
                ></Navigation>
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
            </div>
        )
    } else if (currentPage === PageType.Projects) {
        return (
            <div>
                <Navigation
                    currentPage={currentPage}
                    changeCurrentPage={setCurrentPage}
                ></Navigation>
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
                    deleteProject={(projectId: number) => {
                        setProjects(
                            projects.filter((_, id) => id !== projectId)
                        )
                    }}
                    setProject={(projectId) => {
                        setProject(projectId)
                        setCurrentPage(PageType.Active)
                    }}
                ></ProjectList>
            </div>
        )
    }
    // ✔✔✓🗸✔
}

export default App
