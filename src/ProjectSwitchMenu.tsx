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
        <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2 p-2 bg-slate-300 rounded-md">
            <button
                className="bg-slate-400 p-2 rounded-md hover:bg-slate-300 transition-all hover:shadow-lg font-semibold"
                onClick={() => close()}
            >
                Cancel
            </button>
            <button
                className="bg-red-400 p-2 rounded-md hover:bg-red-300 transition-all hover:shadow-lg font-semibold"
                onClick={() => {
                    deleteProject(projectId)
                    close()
                }}
            >
                Delete
            </button>
            <button
                className="bg-emerald-400 p-2 rounded-md hover:bg-emerald-300 transition-all hover:shadow-lg font-semibold"
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
