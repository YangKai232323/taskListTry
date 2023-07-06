import { ArrowLeftIcon } from '@heroicons/react/24/solid'
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
    return (
        <div className="mt-2 w-screen px-2">
            <div className="flex justify-between gap-2">
                <div className="flex">
                    <button
                        className="w-12 h-12"
                        onClick={() => {
                            const length = lastPage.length - 2
                            if (lastPage) {
                                console.log(lastPage[length])
                                console.log(lastPage)
                                changeCurrentPage(lastPage[length])
                            } else {
                                changeCurrentPage(PageType.Active)
                            }
                        }}
                    >
                        <ArrowLeftIcon className="w-12 h-12"></ArrowLeftIcon>
                    </button>
                </div>
                <button
                    className={
                        currentPage === PageType.Active
                            ? 'font-semi-bold text-xl bg-green-400 p-1 border-green-700 border-4 w-full rounded-md'
                            : 'font-semi-bold text-xl bg-green-200 p-1 border-green-200 border-4 w-full rounded-md'
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
                            ? 'font-semi-bold text-xl bg-red-300 p-1 border-red-500 border-4 w-full rounded-md'
                            : 'font-semi-bold text-xl bg-red-100 p-1 border-red-100 border-4 w-full rounded-md'
                    }
                    onClick={() => {
                        changeCurrentPage(PageType.Completed)
                        addLastPage(PageType.Completed)
                    }}
                >
                    Completed
                </button>
            </div>
            <div className="flex justify-between gap-2 pt-2">
                <button
                    className={
                        currentPage === PageType.Projects
                            ? 'font-semi-bold text-xl bg-sky-300 p-1 border-sky-500 border-4 w-full rounded-md'
                            : 'font-semi-bold text-xl bg-sky-100 p-1 border-sky-100 border-4 w-full rounded-md'
                    }
                    onClick={() => {
                        changeCurrentPage(PageType.Projects)
                        addLastPage(PageType.Projects)
                    }}
                >
                    Projects
                </button>
                <button
                    className={
                        currentPage === PageType.Profile
                            ? 'font-semi-bold text-xl bg-orange-300 p-1 border-orange-500 border-4 w-full rounded-md'
                            : 'font-semi-bold text-xl bg-orange-100 p-1 border-orange-100 border-4 w-full rounded-md'
                    }
                    onClick={() => {
                        changeCurrentPage(PageType.Profile)
                        addLastPage(PageType.Profile)
                    }}
                >
                    Profile
                </button>
            </div>
        </div>
    )
}
