export interface Task {
    name: string
    state: boolean
    value?: number
}

export interface Project {
    name: string
    tasks: Task[]
    completePercents?: number
}
