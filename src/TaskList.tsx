import { Task } from './types'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline'

interface Props {
    tasks: Task[]
    currentProject: string
    deleteTask?(taskName: string): void
    completeTask?(taskName: string): void
}

export function TaskList({ tasks, deleteTask, completeTask }: Props) {
    return (
        <ul className="overflow-auto">
            {tasks.map((task) => (
                <li className="m-3 flex items-center justify-between rounded-lg px-3 py-1 shadow transition-all">
                    <p className="break-all">{task.name}</p>
                    <div>
                        {deleteTask && (
                            <button
                                type="button"
                                className="m-2 mx-1"
                                onClick={() => deleteTask?.(task.name)}
                            >
                                <TrashIcon className="h-7 w-7 text-red-400" />
                            </button>
                        )}
                        {completeTask && (
                            <button
                                type="button"
                                className="m-2 mr-0"
                                onClick={() => completeTask?.(task.name)}
                            >
                                <CheckCircleIcon className="h-7 w-7 text-emerald-400" />
                            </button>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    )
}
