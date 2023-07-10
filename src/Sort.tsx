import { Project } from './types'
import { useState } from 'react'

interface Props {
    projects: Project[]
}

export function Sort({ projects: _projects }: Props) {
    const [sortState, setSortState] = useState<string>('projects')

    const [_sortBy, setSortBy] = useState<string>('complete percents')

    const [sortBtnsVisibility, setSortBtnsVisibility] = useState<boolean>(false)

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
                                if (sortBtnsVisibility === false) {
                                    setSortBtnsVisibility(true)
                                } else {
                                    setSortBtnsVisibility(false)
                                }
                            }}
                        >
                            Complete Percents
                        </button>
                        {sortBtnsVisibility && (
                            <>
                                <button
                                    onClick={() => {
                                        setSortBy('number of tasks')
                                    }}
                                >
                                    Number of tasks
                                </button>
                                <button
                                    onClick={() => {
                                        setSortBy('alphabet')
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
