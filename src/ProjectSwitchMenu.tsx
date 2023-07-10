interface Props {
    projectId: number
    deleteProject(projectId: number): void
    enterProject(projectId: number): void
    close(): void
}

export function ProjectSwitchMenu({
    projectId,
    deleteProject,
    enterProject,
    close,
}: Props) {
    return (
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-2 rounded-md bg-slate-300 p-2">
            <button
                className="rounded-md bg-slate-400 p-2 font-semibold transition-all hover:bg-slate-300 hover:shadow-lg"
                onClick={() => close()}
            >
                Cancel
            </button>
            <button
                className="rounded-md bg-red-400 p-2 font-semibold transition-all hover:bg-red-300 hover:shadow-lg"
                onClick={() => {
                    deleteProject(projectId)
                    close()
                }}
            >
                Delete
            </button>
            <button
                className="rounded-md bg-emerald-400 p-2 font-semibold transition-all hover:bg-emerald-300 hover:shadow-lg"
                onClick={() => {
                    enterProject(projectId)
                    close()
                }}
            >
                Enter
            </button>
        </div>
    )
}
