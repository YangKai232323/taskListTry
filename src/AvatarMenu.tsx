interface Props {
    currentAvatar: number
    onUpdate(avatarId: number): void
}

export function AvatarMenu({ currentAvatar, onUpdate }: Props) {
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

    return (
        <div className="mx-2 flex flex-col items-center justify-center gap-6 rounded-3xl bg-slate-200 p-2">
            <div className="grid grid-flow-col grid-rows-3 gap-6">
                <img
                    onClick={() => onUpdate(0)}
                    src={avatars[0]}
                    alt="avatar1"
                    className={
                        'w-16 rounded-full transition-all ' +
                        (currentAvatar === 0 ? 'shadow' : 'grayscale')
                    }
                />
                <img
                    onClick={() => onUpdate(3)}
                    src={avatars[3]}
                    alt="avatar4"
                    className={
                        'w-16 rounded-full transition-all ' +
                        (currentAvatar === 3 ? 'shadow' : 'grayscale')
                    }
                />
                <img
                    onClick={() => onUpdate(4)}
                    src={avatars[4]}
                    alt="avatar5"
                    className={
                        'w-16 rounded-full transition-all ' +
                        (currentAvatar === 4 ? 'shadow' : 'grayscale')
                    }
                />
                <img
                    onClick={() => onUpdate(5)}
                    src={avatars[5]}
                    alt="avatar6"
                    className={
                        'w-16 rounded-full transition-all ' +
                        (currentAvatar === 5 ? 'shadow' : 'grayscale')
                    }
                />
                <img
                    onClick={() => onUpdate(6)}
                    src={avatars[6]}
                    alt="avatar7"
                    className={
                        'w-16 rounded-full transition-all ' +
                        (currentAvatar === 6 ? 'shadow' : 'grayscale')
                    }
                />
                <img
                    onClick={() => onUpdate(7)}
                    src={avatars[7]}
                    alt="avatar8"
                    className={
                        'w-16 rounded-full transition-all ' +
                        (currentAvatar === 7 ? 'shadow' : 'grayscale')
                    }
                />
                <img
                    onClick={() => onUpdate(8)}
                    src={avatars[8]}
                    alt="avatar9"
                    className={
                        'w-16 rounded-full transition-all ' +
                        (currentAvatar === 8 ? 'shadow' : 'grayscale')
                    }
                />
                <img
                    onClick={() => onUpdate(9)}
                    src={avatars[9]}
                    alt="avatar10"
                    className={
                        'w-16 rounded-full transition-all ' +
                        (currentAvatar === 9 ? 'shadow' : 'grayscale')
                    }
                />
                <img
                    onClick={() => onUpdate(10)}
                    src={avatars[10]}
                    alt="avatar11"
                    className={
                        'w-16 rounded-full transition-all ' +
                        (currentAvatar === 10 ? 'shadow' : 'grayscale')
                    }
                />
            </div>
        </div>
    )
}
