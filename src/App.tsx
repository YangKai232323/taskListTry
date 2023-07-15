import { useEffect, useState } from 'react'
import { PageType, Project, Task } from './types'
import { TaskList } from './TaskList'
import { ProjectList } from './ProjectList'
import { Navigation } from './Navigation'
import { Profile } from './Profile'
import { History } from './History'
import { TaskAdd } from './TaskAdd'

function App() {
    const [currentPage, setCurrentPage] = useState<PageType>(PageType.Active)

    const [projects, setInMemoryProjects] = useState<Project[]>([])

    const [currentAvatar, setCurrentAvatar] = useState(9)

    const [forSearch, setForSearch] = useState<[[string, string]]>([['', '']])

    const [tasksData, setTasksData] = useState<Task[]>([{name: '1', state: true, value: 0}])

    function setProjects(projectList: Project[]): void {
        setInMemoryProjects(projectList)
        localStorage.setItem('projects', JSON.stringify(projectList))
    }

    useEffect(() => {
        const projects = JSON.parse(localStorage.getItem('projects') || 'null')
        if (projects) {
            setInMemoryProjects(projects)
        } else {
            setInMemoryProjects([
                {
                    name: 'Initial project',
                    tasks: [
                        {
                            name: 'Initial task',
                            state: false,
                            value: 10,
                        },
                    ],
                },
            ])
        }
    }, [])

    const [currentProject, setProject] = useState<number>(0)

    const tasks = (projects[currentProject]?.tasks as Task[]) || []

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
        // setForSearch([...forSearch, [task.name,'task']])
    }

    const [history, setHistory] = useState<any>([])

    // const [curAvatar, setCurAvatar] = useState<number>(9)

    function addToHistory(
        taskName: string,
        currentProjectName: string,
        taskState: string
    ) {
        history.length > 0
            ? setHistory([
                  ...history,
                  [taskName, currentProjectName, taskState],
              ])
            : setHistory([[taskName, currentProjectName, taskState]])
    }

    function deleteTask(taskName: string) {
        const tasksForSet = tasks.filter((task) => task.name !== taskName)
        setTasks(tasksForSet)
        addToHistory(taskName, projects[currentProject].name, 'deleted')
        const tasksForSetForSearch = forSearch.filter(task => task[1] === 'task')
    }

    if (currentPage === PageType.Completed) {
        return (
            <div className="text-lg md:mx-auto md:w-max">
                <Navigation
                    addLastPage={(page) => console.log(page)}
                    currentPage={currentPage}
                    changeCurrentPage={(currentPage) => {
                        setCurrentPage(currentPage)
                    }}
                ></Navigation>
                {tasks.filter((task) => task.state).length > 0 ? (
                    <TaskList
                        currentProject={projects[currentProject].name}
                        tasks={tasks.filter((task) => task.state)}
                        deleteTask={deleteTask}
                    ></TaskList>
                ) : (
                    <p className="text-center">No completed tasks</p>
                )}
            </div>
        )
    } else if (currentPage === PageType.Active) {
        return (
            <div className="flex h-[100dvh] flex-col text-lg md:mx-auto md:w-max">
                <Navigation
                    addLastPage={(page) => console.log(page)}
                    currentPage={currentPage}
                    changeCurrentPage={(currentPage) => {
                        setCurrentPage(currentPage)
                    }}
                ></Navigation>
                <TaskList
                    currentProject={projects[currentProject]?.name}
                    tasks={tasks.filter((task) => !task?.state) || []}
                    completeTask={(taskName) => {
                        setTasks(
                            tasks.map((task) => {
                                if (taskName === task?.name) {
                                    return {
                                        ...task,
                                        state: true,
                                    }
                                }
                                return task
                            })
                        )
                        addToHistory(
                            taskName,
                            projects[currentProject]?.name,
                            'completed'
                        )
                    }}
                    deleteTask={deleteTask}
                />
                <TaskAdd
                    tasks={tasks}
                    onAdd={(taskName) => {
                        if (!taskName) {
                            return 'Please enter something to textspace'
                        }
                        addTask({
                            name: taskName,
                            state: false,
                            value: 10,
                        })
                        setTasksData([...tasksData, {
                            name: taskName,
                            state: false,
                            value: 10,
                        }])
                        addToHistory(
                            taskName,
                            projects[currentProject]?.name,
                            'active'
                        )
                        return 'All ok'
                    }}
                />
            </div>
        )
    } else if (currentPage === PageType.Projects) {
        return (
            <div className="text-lg md:mx-auto md:w-max">
                <Navigation
                    addLastPage={(page) => console.log(page)}
                    currentPage={currentPage}
                    changeCurrentPage={(currentPage) => {
                        setCurrentPage(currentPage)
                    }}
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
    } else if (currentPage === PageType.Profile) {
        return (
            <div className="text-lg md:mx-auto md:w-max">
                <Navigation
                    addLastPage={(page) => console.log(page)}
                    currentPage={currentPage}
                    changeCurrentPage={(currentPage) => {
                        setCurrentPage(currentPage)
                    }}
                ></Navigation>
                <Profile
                    avatar={currentAvatar}
                    setCurrentAvatar={setCurrentAvatar}
                    projects={projects}
                    changeCurrentPage={(currentPage) => {
                        setCurrentPage(currentPage)
                    }}
                ></Profile>
            </div>
        )
    } else if (currentPage === PageType.History) {
        return (
            <div className="text-lg md:mx-auto md:w-max">
                <Navigation
                    addLastPage={(page) => console.log(page)}
                    currentPage={currentPage}
                    changeCurrentPage={(currentPage) => {
                        setCurrentPage(currentPage)
                    }}
                ></Navigation>
                <History history={history}></History>
            </div>
        )
    }
    // ✔✔✓🗸✔
}

export default App
