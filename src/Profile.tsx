import { useState } from 'react'
import { Task, Project, PageType } from './types'

interface Props {
    projects: Project[]
    changeCurrentPage(currentPage: PageType): void
}

export function Profile({ projects, changeCurrentPage }: Props) {
    const [username, setUsername] = useState('Uknown User')

    const [avatar, setAvatar] = useState(-1)

    function countExp(projects: Project[]): number {
        let value = 0
        projects.map((project) => {
            value += project.tasks.filter((task) => task.state).length
        })
        return value
    }

    const currentExp = countExp(projects)

    function countLevel(exp: number): number {
        return Math.floor(exp / 100)
    }

    return (
        <>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex mx-4 items-center gap-4">
                    <img
                        src="/src/images/unknownUserIcon.svg"
                        alt="avatar"
                        className="border-4 border-slate-500"
                    />
                    <h3 className="font-bold text-2xl break-all">{username}</h3>
                </div>
                <div className="flex flex-col ml-4 gap-1 items-center">
                    <h2 className="font- bold">
                        {countLevel(currentExp)} Level
                    </h2>
                    <div className="flex">
                        <progress value={currentExp % 100} max={100}></progress>
                        <p>{currentExp % 100} / 100</p>
                    </div>
                </div>
                <button onClick={() => changeCurrentPage(PageType.History)}>
                    Check History
                </button>
            </div>
        </>
    )
}
