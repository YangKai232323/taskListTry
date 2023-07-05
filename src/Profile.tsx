import { useState } from 'react'
import { Task, Project, PageType } from './types'
import { AvatarMenu } from './AvatarMenu'

interface Props {
    projects: Project[]
    changeCurrentPage(currentPage: PageType): void
}

export function Profile({ projects, changeCurrentPage }: Props) {
    const [username, setUsername] = useState('Uknown User')

    const [currentAvatar, setCurrentAvatar] = useState(9)

    const [isAvatarMenuVisible, setIsAvatarMenuVisible] =
        useState<boolean>(false)

    function countExp(projects: Project[]): number {
        let value = 0
        projects.map((project) => {
            value += project.tasks.filter((task) => task.state).length
        })
        return value
    }

    const avatars: string[] = [
        '/src/images/avatar1.svg',
        '/src/images/avatar2.svg',
        '/src/images/avatar3.svg',
        '/src/images/avatar4.svg',
        '/src/images/avatar5.svg',
        '/src/images/avatar6.svg',
        '/src/images/avatar7.svg',
        '/src/images/avatar8.svg',
        '/src/images/avatar9.svg ',
        '/src/images/avatar10.svg',
        '/src/images/avatar11.svg',
        '/src/images/avatar12.svg',
    ]

    const currentExp = countExp(projects)

    function countLevel(exp: number): number {
        return Math.floor(exp / 100)
    }

    return (
        <>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex mx-4 items-center gap-4">
                    <img
                        onClick={() => setIsAvatarMenuVisible(true)}
                        src={avatars[currentAvatar]}
                        alt="avatar"
                        className=" w-24 h-24 rounded-[50%]"
                    />
                    <h3 className="font-bold text-2xl break-all">{username}</h3>
                </div>
                {isAvatarMenuVisible && (
                    <AvatarMenu
                        currentAvatar={currentAvatar}
                        setCurrentAvatar1={setCurrentAvatar}
                        setIsVisible={setIsAvatarMenuVisible}
                    ></AvatarMenu>
                )}
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
