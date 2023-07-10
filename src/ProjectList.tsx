import { PlusIcon } from '@heroicons/react/24/solid'
import { Project } from './types'
import { useState } from 'react'
import { ProjectSwitchMenu } from './ProjectSwitchMenu'

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

    return (
        <div className="mt-2 rounded-xl border-2 border-gray-800 bg-slate-300 p-2">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, projectId) => {
                    const numberOfCompletedTasks = project.tasks.filter(
                        (task) => task.state
                    ).length

                    const numberOfTasks = project.tasks.length

                    return (
                        <li
                            className="m-3 flex flex-col items-center border-2 border-gray-800 bg-slate-200 transition-all hover:cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
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
                    className="h-10 w-full bg-slate-300 px-2 outline-none hover:bg-gray-200 focus:bg-gray-200"
                    onInput={(event: any) =>
                        setInputProjectName(event.target.value)
                    }
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
