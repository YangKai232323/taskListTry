import { useState } from "react";
import { PageType, Project, Task } from "./types";

interface Props {
    tasksData?: Task[]
    projects?: Project[]
    page: PageType
}

export function Search({tasksData, projects, page}: Props) {
    const [inputValue, setInputValue] = useState<string>('')

    function searchProjects(item: string, massive?: Project[]): any {
        let answer = massive?.filter(element => element.name.includes(item))
        return answer
    }

    function searchTasks(item: string, massive?: Task[]): any {
        let answer = massive?.filter(element => element.name.includes(item))
        return answer
    }

    // const [tasksData, setTasksData] = useState<Task[]>([{name: '1', state: true, value: 0}])

    return (
        <>
            <input type="text" placeholder="Search something" onInput={(event: any) =>
                {setInputValue(event.target.value)}
            }/>
            <ul>
                {page==="projects"?(
                <>{searchProjects(inputValue, projects).map((project: Project) => {return(<li>
                    {project.name}
                </li>)})}
                    {/* <li className="bg-slate-300 p-4 m-4 text-lg">{searchProjects(inputValue, projects)}</li> */}
                </>):(<>
                    {/* <li>{searchTasks(inputValue, tasksData)}</li>
                     */}
                    {searchTasks(inputValue, tasksData).map((task: Task) => {return(<li>
                    {task.name}
                </li>)})}
                </>)}
            </ul>
        </>
    )
}