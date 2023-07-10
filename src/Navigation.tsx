import {
    FolderIcon,
    ListBulletIcon,
    UserIcon,
} from '@heroicons/react/24/outline'
import { PageType } from './types'

interface Props {
    currentPage: PageType
    changeCurrentPage(currentPage: PageType): void
    lastPage: PageType[]

    addLastPage(page: PageType): void
}

export function Navigation({
    currentPage,
    changeCurrentPage,
    lastPage,

    addLastPage,
}: Props) {
    if (currentPage === PageType.Projects) {
        return (
            <div className="mt-3 flex w-full gap-3 px-3">
                <button
                    className="flex aspect-square h-12 items-center justify-center rounded-lg bg-white text-emerald-400 shadow"
                    onClick={() => {
                        changeCurrentPage(PageType.Active)
                        addLastPage(PageType.Active)
                    }}
                >
                    <ListBulletIcon className="h-8" />
                </button>
                <p className="flex h-12 w-full items-center justify-center rounded-lg bg-sky-300 text-black shadow">
                    Projects
                </p>
                <button
                    className="flex aspect-square h-12 items-center justify-center rounded-lg bg-white text-amber-400 shadow"
                    onClick={() => {
                        changeCurrentPage(PageType.Profile)
                        addLastPage(PageType.Profile)
                    }}
                >
                    <UserIcon className="h-8" />
                </button>
            </div>
        )
    }

    if (currentPage === PageType.Profile) {
        return (
            <div className="mt-3 flex w-full gap-3 px-3">
                <button
                    className="flex aspect-square h-12 items-center justify-center rounded-lg bg-white text-emerald-400 shadow"
                    onClick={() => changeCurrentPage(PageType.Active)}
                >
                    <ListBulletIcon className="h-8" />
                </button>
                <p className="flex h-12 w-full items-center justify-center rounded-lg bg-amber-300 text-black shadow">
                    Profile
                </p>
                <button
                    className="flex aspect-square h-12 items-center justify-center rounded-lg bg-white text-sky-400 shadow"
                    onClick={() => changeCurrentPage(PageType.Projects)}
                >
                    <FolderIcon className="h-8" />
                </button>
            </div>
        )
    }

    return (
        <div className="mt-3 flex w-full gap-3 px-3">
            <button
                className="flex aspect-square h-12 items-center justify-center rounded-lg bg-white text-sky-400 shadow"
                onClick={() => changeCurrentPage(PageType.Projects)}
            >
                <FolderIcon className="h-8" />
            </button>
            <button
                className={
                    currentPage === PageType.Active
                        ? 'h-12 w-full rounded-lg bg-emerald-400 text-white shadow'
                        : 'h-12 w-full rounded-lg bg-white text-emerald-400 shadow'
                }
                onClick={() => {
                    changeCurrentPage(PageType.Active)
                    addLastPage(PageType.Active)
                }}
            >
                Active
            </button>
            <button
                className={
                    currentPage === PageType.Completed
                        ? 'h-12 w-full rounded-lg bg-red-300 text-black shadow'
                        : 'h-12 w-full rounded-lg bg-white text-red-400 shadow'
                }
                onClick={() => {
                    changeCurrentPage(PageType.Completed)
                    addLastPage(PageType.Completed)
                }}
            >
                Completed
            </button>
        </div>
    )
}
