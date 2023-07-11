import { Project, SortBy, Task } from './types'
import { useState } from 'react'

interface Props {
    projects: Project[]
}

export function Sort({ projects: _projects }: Props) {
    const [sortState, setSortState] = useState('projects')

    const [_sortBy, setSortBy] = useState('complete percents')

    const [buttonVisibility, setButtonVisibility] = useState(false)

    let sortHelper:[number, number, [string, Task[]]][] = []

    function sortByCompletelly(projects: Project[]): void {
        sortHelper = []
        projects.map((project, id) => {
            let name = project.name
            let tasksCounter = 0
            let completed = 0
            let tasks: Task[] = []
            project.tasks.map((task) =>
            {
                if (task.state === true) {
                    completed ++
                }
                tasksCounter ++
                tasks.push(task)
            })
            const percent = (completed / tasksCounter) * 100
            sortHelper.push([id, percent, [name, tasks]])
            console.log(sortHelper)
        })
    }

    return (
        <div>
            <div className="flex gap-2">
                <button
                    className='bg-red-300'
                    onClick={() => {
                        setSortState('projects')
                    }}
                >
                    Projects
                </button>
                <button
                className='bg-emerald-300'
                    onClick={() => {
                        setSortState('tasks')
                    }}
                >
                    Tasks
                </button>
            </div>
            {sortState === 'projects' ? (
                <div>
                    <p>Project Sorter</p>
                    <div className="flex flex-col">
                        <label htmlFor="sortSelector">Sort by</label>
                        <button
                            id="sortSelector"
                            onClick={() => {
                                if (buttonVisibility === false) {
                                    setButtonVisibility(true)
                                } else {
                                    setButtonVisibility(false)
                                }
                            }}
                        >
                            Complete Percents
                        </button>
                        {buttonVisibility && (
                            <div className='flex flex-col gap-2 mt-4'>
                                <button
                                    onClick={() => {
                                        setSortBy(SortBy.Completeness)
                                        sortByCompletelly(_projects)
                                    }}
                                >
                                    Complete percents
                                </button>
                                <button
                                    onClick={() => {
                                        setSortBy(SortBy.AmountOfTasks)
                                    }}
                                >
                                    Number of tasks
                                </button>
                                <button
                                    onClick={() => {
                                        setSortBy(SortBy.Alphabetically)
                                    }}
                                >
                                    Alphabet
                                </button>
                            </div>
                        )}
                    </div>
                    <ul>{}</ul>
                </div>
            ) : (
                <div>Task Sorter</div>
            )}
        </div>
    )
}
