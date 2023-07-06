import { useState } from 'react'

interface Props {
    currentAvatar: number
    setCurrentAvatar1(avatarId: number): void
    setIsVisible(is: boolean): void
}

export function AvatarMenu({ setCurrentAvatar1, setIsVisible }: Props) {
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

    const [menuCurrentAvatar, setMenuCurrentAvatar] = useState(9)

    return (
        <div className="bg-slate-200 rounded-3xl mx-2 p-2 flex-col gap-6 flex justify-center items-center">
            <div className="grid grid-rows-3 grid-flow-col gap-6">
                <img
                    onClick={() => setMenuCurrentAvatar(0)}
                    src={avatars[0]}
                    alt="avatar1"
                    className="w-16 hover:border-4 hover:border-sky-700 rounded-[50%]"
                />
                <img
                    onClick={() => setMenuCurrentAvatar(3)}
                    src={avatars[3]}
                    alt="avatar4"
                    className="w-16 hover:border-4 hover:border-sky-700 rounded-[50%]"
                />
                <img
                    onClick={() => setMenuCurrentAvatar(4)}
                    src={avatars[4]}
                    alt="avatar5"
                    className="w-16 hover:border-4 hover:border-sky-700 rounded-[50%]"
                />
                <img
                    onClick={() => setMenuCurrentAvatar(5)}
                    src={avatars[5]}
                    alt="avatar6"
                    className="w-16 hover:border-4 hover:border-sky-700 rounded-[50%]"
                />
                <img
                    onClick={() => setMenuCurrentAvatar(6)}
                    src={avatars[6]}
                    alt="avatar7"
                    className="w-16 hover:border-4 hover:border-sky-700 rounded-[50%]"
                />
                <img
                    onClick={() => setMenuCurrentAvatar(7)}
                    src={avatars[7]}
                    alt="avatar8"
                    className="w-16 hover:border-4 hover:border-sky-700 rounded-[50%]"
                />
                <img
                    onClick={() => setMenuCurrentAvatar(8)}
                    src={avatars[8]}
                    alt="avatar9"
                    className="w-16 hover:border-4 hover:border-sky-700 rounded-[50%]"
                />
                <img
                    onClick={() => setMenuCurrentAvatar(9)}
                    src={avatars[9]}
                    alt="avatar10"
                    className="w-16 hover:border-4 hover:border-sky-700 rounded-[50%]"
                />
                <img
                    onClick={() => setMenuCurrentAvatar(10)}
                    src={avatars[10]}
                    alt="avatar11"
                    className="w-16 hover:border-4 hover:border-sky-700 rounded-[50%]"
                />
                <img
                    onClick={() => setMenuCurrentAvatar(11)}
                    src={avatars[11]}
                    alt="avatar12"
                    className="w-16 rounded-[50%] hover:border-4 hover:border-sky-700 "
                />
                <button
                    className="rounded-[50%] bg-emerald-300"
                    onClick={() => setCurrentAvatar1(menuCurrentAvatar)}
                >
                    Save
                </button>
                <button
                    className="rounded-[50%] bg-slate-400"
                    onClick={() => setIsVisible(false)}
                >
                    Back
                </button>
            </div>
        </div>
    )
}
