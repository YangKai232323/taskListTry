interface Props {
    currentAvatar: number
    setCurrentAvatar(avatarId: number): void
}

export function AvatarMenu({ currentAvatar, setCurrentAvatar }: Props) {
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

    return (
        <div className="bg-slate-200 rounded-3xl mx-2 p-2 flex-col gap-6 flex justify-center items-center">
            <div className="flex items-center justify-center">
                <img
                    src={avatars[currentAvatar]}
                    alt="currentAvatar"
                    className="rounded-[50%]"
                />
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-6">
                <img
                    src={avatars[0]}
                    alt="avatar1"
                    className="w-16 active:border-2 active:border-sky-700 rounded-[50%]"
                />
                <img
                    src={avatars[3]}
                    alt="avatar4"
                    className="w-16 active:border-2 active:border-sky-700 rounded-[50%]"
                />
                <img
                    src={avatars[4]}
                    alt="avatar5"
                    className="w-16 active:border-2 active:border-sky-700 rounded-[50%]"
                />
                <img
                    src={avatars[5]}
                    alt="avatar6"
                    className="w-16 active:border-2 active:border-sky-700 rounded-[50%]"
                />
                <img
                    src={avatars[6]}
                    alt="avatar7"
                    className="w-16 active:border-2 active:border-sky-700 rounded-[50%]"
                />
                <img
                    src={avatars[7]}
                    alt="avatar8"
                    className="w-16 active:border-2 active:border-sky-700 rounded-[50%]"
                />
                <img
                    src={avatars[8]}
                    alt="avatar9"
                    className="w-16 active:border-2 active:border-sky-700 rounded-[50%]"
                />
                <img
                    src={avatars[9]}
                    alt="avatar10"
                    className="w-16 active:border-2 active:border-sky-700 rounded-[50%]"
                />
                <img
                    src={avatars[10]}
                    alt="avatar11"
                    className="w-16 active:border-2 active:border-sky-700 rounded-[50%]"
                />
                <img
                    src={avatars[11]}
                    alt="avatar12"
                    className="w-16 rounded-[50%] active:border-2 active:border-sky-700 "
                />
                <button>Save</button>
            </div>
        </div>
    )
}
