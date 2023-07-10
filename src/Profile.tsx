import { useState } from 'react'
import { Project, PageType } from './types'
import { AvatarMenu } from './AvatarMenu'

interface Props {
    projects: Project[]
    avatar: number
    setCurrentAvatar(id: number): void
    changeCurrentPage(currentPage: PageType): void
}

export function Profile({
    projects,
    changeCurrentPage,
    avatar,
    setCurrentAvatar,
}: Props) {
    const [username, _setUsername] = useState('Uknown User')

    // const [currentAvatar, setCurrentAvatar] = useState(9)

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
        '/avatar1.svg',
        '/avatar2.svg',
        '/avatar3.svg',
        '/avatar4.svg',
        '/avatar5.svg',
        '/avatar6.svg',
        '/avatar7.svg',
        '/avatar8.svg',
        '/avatar9.svg ',
        '/avatar10.svg',
        '/avatar11.svg',
        '/avatar12.svg',
    ]

    const currentExp = countExp(projects)

    function countLevel(exp: number): number {
        return Math.floor(exp / 100)
    }

    return (
        <>
            <div className="mt-4 flex flex-col gap-4">
                <div className="mx-4 flex items-center gap-4">
                    <img
                        onClick={() => setIsAvatarMenuVisible(true)}
                        src={avatars[avatar]}
                        alt="avatar"
                        className="h-24 w-24 rounded-full"
                    />
                    <h3 className="break-all text-2xl font-bold">{username}</h3>
                </div>
                {isAvatarMenuVisible && (
                    <AvatarMenu
                        currentAvatar={avatar}
                        setCurrentAvatar1={(id: number) => {
                            setCurrentAvatar(id)
                        }}
                        setIsVisible={setIsAvatarMenuVisible}
                    />
                )}
                <div className="ml-4 flex flex-col items-center gap-1">
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
