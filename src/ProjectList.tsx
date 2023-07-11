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

    const [subtitle, setSubtitle] = useState('Please enter something before add')

    function inputEnterPress(event: any): void {
        if (event.key === 'Enter') {
            // addProject(inputProjectName)
            // setInputProjectName('')
            if (inputProjectName) {
                const nameExist = projects.find((element: Project) => {return element.name === inputProjectName})
                if (!nameExist) {
                    addProject(inputProjectName)
                    setInputProjectName('')}
                else {setSubtitle("Name is already exist")}}
            else {
                setSubtitle("Please enter something before add")
            }
        }
    }

    function backspacePress(event: any): void {
        if (event.key === 'Backspace') {
            setSubtitle('')
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
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Enter project name"
                        value={inputProjectName}
                        className="h-10 w-full bg-white px-2 outline-none focus:bg-gray-100 rounded-lg"
                        onInput={(event: any) =>{
                            setInputProjectName(event.target.value)
                            const nameExist = projects.find((element: Project) => {return element.name === event.target.value}) 
                            if (nameExist) {
                                setSubtitle('Name is already exist')
                            }        
                            else if (!event.target.value) {
                                setSubtitle('Please enter something before add')
                            }
                            else {
                                setSubtitle('')
                            }                               
                        }}
                        onKeyDown={(event: any) => {inputEnterPress(event)
                        backspacePress(event)}}
                    />
                    <p className='text-base text-red-500'>{subtitle}</p>
                </div>
                <button
                    className="ml-2 flex h-10 w-10 items-center justify-center border-2 border-gray-700 p-0"
                    onClick={() => {
                        if (inputProjectName) {
                            const nameExist = projects.find((element: Project) => {return element.name === inputProjectName})
                            if (!nameExist) {
                                addProject(inputProjectName)
                                setInputProjectName('')}
                            
                        
                            }}}
                >
                    <PlusIcon className="m-0 h-10 w-10"> </PlusIcon>
                </button>
            </div>
        </div>
    )
}
