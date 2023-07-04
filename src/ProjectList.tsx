import { PlusIcon } from '@heroicons/react/24/solid'
import { Task, Project } from './types'
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

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const [clickedProject, setClickedProject] = useState(-1)

    return (
        <div className="bg-slate-300 border-2 border-gray-800 rounded-xl p-2 mt-2">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, projectId) => {
                    const numberOfCompletedTasks = project.tasks.filter(
                        (task) => task.state
                    ).length

                    const numberOfTasks = project.tasks.length

                    return (
                        <li
                            className="flex flex-col bg-slate-200 border-2 border-gray-800 items-center m-3 hover:cursor-pointer hover:shadow-lg hover:shadow-slate-500 transition-all "
                            // onClick={() => setProject(projectId)}
                            onClick={() => {
                                setClickedProject(projectId)
                                setIsMenuVisible(true)
                            }}
                        >
                            <h3 className="mt-2 font-bold break-all">
                                {project.name}
                            </h3>
                            <div className="flex gap-2 items-center m-3">
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
            {isMenuVisible && (
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
                    className="h-10 w-full bg-slate-300 hover:bg-gray-200 focus:bg-gray-200 outline-none px-2"
                    onInput={(event: any) =>
                        setInputProjectName(event.target.value)
                    }
                />
                <button
                    className="w-10 h-10 ml-2 border-2 border-gray-700 p-0 flex items-center justify-center"
                    onClick={() => {
                        addProject(inputProjectName)
                        setInputProjectName('')
                    }}
                >
                    <PlusIcon className="w-10 h-10 m-0"> </PlusIcon>
                </button>
            </div>
        </div>
    )
}
