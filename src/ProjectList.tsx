import { PlusIcon } from '@heroicons/react/24/solid'
import { Project } from './types'
import { useState } from 'react'
import { ProjectSwitchMenu } from './ProjectSwitchMenu'
import { Sort } from './Sort'

interface Props {
    projects: Project[]
    addProject(projectName: string): void
    setProject(projectId: number): void
    deleteProject(projectName: number): void
}

export function ProjectList({
    projects,
    addProject,
    setProject,
    deleteProject,
}: Props) {
    const [inputProjectName, setInputProjectName] = useState('')

    const [showMenu, setIsMenuVisible] = useState(false)

    const [clickedProject, setClickedProject] = useState(-1)

    function inputEnterPress(event: any): void {
        if (event.key === 'Enter') {
            addProject(inputProjectName)
            setInputProjectName('')
        }
    }

    return (
        <div className="mt-2 rounded-xl border-2 bg-white p-2 shadow-lg">
            <Sort projects={projects}></Sort>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, projectId) => {
                    const numberOfCompletedTasks = project.tasks.filter(
                        (task) => task.state
                    ).length

                    const numberOfTasks = project.tasks.length

                    return (
                        <li
                            className="m-3 flex flex-col items-center shadow-xl bg-white transition-all  "
                            onClick={() => {
                                setClickedProject(projectId)
                                setIsMenuVisible(true)
                            }}
                        >
                            <h3 className="mt-2 break-all font-bold">
                                {project.name}
                            </h3>
                            <div className="m-3 flex items-center gap-2">
                                <progress
                                    className="mt-2"
                                    value={
                                        (numberOfCompletedTasks /
                                            numberOfTasks) *
                                        100
                                    }
                                    max={100}
                                >
                                    {project?.completePercents}
                                </progress>
                                <p>
                                    {numberOfCompletedTasks} / {numberOfTasks}
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>

            {showMenu && (
                <ProjectSwitchMenu
                projects={projects}
                    projectId={clickedProject}
                    close={() => setIsMenuVisible(false)}
                    enterProject={(clickedProject) =>
                        setProject(clickedProject)
                    }
                    deleteProject={(clickedProject) =>
                        deleteProject(clickedProject)
                    }
                ></ProjectSwitchMenu>
            )}

            <div className="flex p-4">
                <input
                    type="text"
                    placeholder="Enter project name"
                    value={inputProjectName}
                    className="h-10 w-full bg-white px-2 outline-none focus:bg-gray-100 rounded-lg"
                    onInput={(event: any) =>
                        setInputProjectName(event.target.value)
                    }
                    onKeyDown={inputEnterPress}
                />
                <button
                    className="ml-2 flex h-10 w-10 items-center justify-center border-2 border-gray-700 p-0"
                    onClick={() => {
                        addProject(inputProjectName)
                        setInputProjectName('')
                    }}
                >
                    <PlusIcon className="m-0 h-10 w-10"> </PlusIcon>
                </button>
            </div>
        </div>
    )
}
