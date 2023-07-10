import { useState } from 'react'
import { Task } from './types'
import { PlusCircleIcon } from '@heroicons/react/24/outline'

interface Props {
    tasks: Task[]
    onAdd?(taskName: string): void
}

export function TaskAdd({ tasks, onAdd }: Props) {
    const [inputTaskName, setInputTaskName] = useState<string>('')

    const [isValid, setIsValid] = useState(true)

    return (
        <div className="absolute bottom-0 w-full bg-white p-3">
            <div className="flex justify-between gap-3 rounded-lg shadow">
                <input
                    value={inputTaskName}
                    id="taskInput"
                    className="h-12 w-full bg-transparent p-3 outline-none"
                    type="text"
                    placeholder="Name"
                    onInput={(event: any) => {
                        setInputTaskName(event.target.value)
                        if (
                            tasks.find(
                                (task) => task.name === event.target.value
                            )
                        ) {
                            setIsValid(false)
                        } else {
                            setIsValid(true)
                        }
                    }}
                />
                {isValid ? (
                    <button
                        type="button"
                        className="aspect-square h-12 scale-90 rounded-lg bg-emerald-400 p-3 text-white transition-all active:scale-75 active:bg-emerald-300 md:hover:bg-emerald-300"
                        onClick={() => {
                            if (!inputTaskName) {
                                alert('Name is mandatory')
                            } else {
                                onAdd?.(inputTaskName)
                                setInputTaskName('')
                            }
                        }}
                    >
                        <PlusCircleIcon />
                    </button>
                ) : (
                    <p className="flex w-fit items-center justify-center whitespace-nowrap rounded-lg bg-red-400 px-2 font-bold text-white">
                        Name's taken
                    </p>
                )}
            </div>
        </div>
    )
}
