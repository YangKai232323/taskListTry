import { Project, SortBy } from './types'
import { useState } from 'react'

interface Props {
    projects: Project[]
}

export function Sort({ projects: _projects }: Props) {
    const [sortState, setSortState] = useState('projects')

    const [_sortBy, setSortBy] = useState('complete percents')

    const [buttonVisibility, setButtonVisibility] = useState(false)

    return (
        <div>
            <div className="flex gap-2">
                <button
                    onClick={() => {
                        setSortState('projects')
                    }}
                >
                    Projects
                </button>
                <button
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
                            <>
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
                            </>
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
