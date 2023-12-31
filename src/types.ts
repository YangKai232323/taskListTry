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

export enum PageType {
    Active = 'active',
    Completed = 'completed',
    Projects = 'projects',
    Profile = 'profile',
    History = 'history',
    Search = 'search'
}

export enum SortBy {
    Alphabetically = 'alpha',
    AmountOfTasks = 'tasks',
    Completeness = 'completness',
}
