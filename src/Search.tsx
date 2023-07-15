import { useState } from "react";
import { PageType, Project, Task } from "./types";

interface Props {
    tasksData: Task[]
    projects?: Project[]
    page: PageType
}

export function Search({tasksData, projects, page}: Props) {
    const [inputValue, setInputValue] = useState<string>('')

    let answer = ''

    function searchProjects(item: string, massive: Project[]): any {
        let answer = massive.filter(element => element.name[item.length - 1] === item)
        return answer
    }

    function searchTasks(item: string, massive: Task[]): any {
        let answer = massive.filter(element => element.name[item.length - 1] === item)
        return answer
    }

    // const [tasksData, setTasksData] = useState<Task[]>([{name: '1', state: true, value: 0}])

    const returnable = []

    return (
        <>
            <input type="text" placeholder="Search something" onInput={(event: any) =>
                {setInputValue(event.target.value)}
            }/>
            <ul>
                {page==="projects"?(
                <>
                    <li>{searchProjects(inputValue, (projects || []))}</li>
                </>):(<>
                    <li>{searchTasks(inputValue, tasksData)}</li>
                </>)}
            </ul>
        </>
    )
}