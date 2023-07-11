import { Project } from './types'

interface Props {
    projectId: number
    projects: Project[]
    deleteProject(projectId: number): void
    enterProject(projectId: number): void
    close(): void
}

export function ProjectSwitchMenu({
    projectId,
    projects,
    deleteProject,
    enterProject,
    close,
}: Props) {
    return (
        <div className="flex flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform gap-6 p-6 bg-white rounded-xl justify-center items-center break-all w-64 h-72 shadow-2xl transition-all shadow-slate-900">
            <p className='justify-center items-center font-semibold text-xl'>{projects[projectId].name}</p>
            <div className="flex items-center justify-center">
                <button
                    className="rounded-md bg-slate-400 p-2 font-semibold transition-all "
                    onClick={() => close()}
                >
                    Cancel
                </button>
                <button
                    className="rounded-md bg-red-400 p-2 font-semibold transition-all "
                    onClick={() => {
                        deleteProject(projectId)
                        close()
                    }}
                >
                    Delete
                </button>
                <button
                    className="rounded-md bg-emerald-400 p-2 font-semibold transition-all "
                    onClick={() => {
                        enterProject(projectId)
                        close()
                    }}
                >
                    Enter
                </button>
            </div>
        </div>
    )
}
