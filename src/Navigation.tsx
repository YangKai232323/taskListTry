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
                        className="h-12 w-12"
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
                        <ArrowLeftIcon className="h-12 w-12"></ArrowLeftIcon>
                    </button>
                </div>
                <button
                    className={
                        currentPage === PageType.Active
                            ? 'font-semi-bold w-full rounded-md border-4 border-green-700 bg-green-400 p-1 text-xl'
                            : 'font-semi-bold w-full rounded-md border-4 border-green-200 bg-green-200 p-1 text-xl'
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
                            ? 'font-semi-bold w-full rounded-md border-4 border-red-500 bg-red-300 p-1 text-xl'
                            : 'font-semi-bold w-full rounded-md border-4 border-red-100 bg-red-100 p-1 text-xl'
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
                            ? 'font-semi-bold w-full rounded-md border-4 border-sky-500 bg-sky-300 p-1 text-xl'
                            : 'font-semi-bold w-full rounded-md border-4 border-sky-100 bg-sky-100 p-1 text-xl'
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
                            ? 'font-semi-bold w-full rounded-md border-4 border-orange-500 bg-orange-300 p-1 text-xl'
                            : 'font-semi-bold w-full rounded-md border-4 border-orange-100 bg-orange-100 p-1 text-xl'
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
