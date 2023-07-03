import { Task, Project } from './types'
import { useState } from 'react'

interface Props {
    projects: Project[]
    addProject(): void
    setProject(): void
    deleteProject(): void
}

export function ProjectList({
    projects,
    addProject,
    setProject,
    deleteProject,
}: Props) {
    return (
        <>
            <div>
                <p>Ya Tupoj</p>
            </div>
        </>
    )
}
