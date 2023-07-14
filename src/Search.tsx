import { useState } from "react";
import { PageType, Project } from "./types";

interface Props {
    projects: Project[]
    page: PageType
}

export function Search({projects, page}: Props) {
    const [inputValue, setInputValue] = useState<string>('')

    function search(item: string, massive: [element: any]): void {
        massive.filter(element => element.name[item.length - 1] === item)
    }

    const returnable = []

    return (
        <>
            <input type="text" placeholder="Search something" onInput={(event: any) =>
                {setInputValue(event.target.value)}
            }/>
            <ul>
                {page==="projects"?(<>
                    
                </>):()}
            </ul>
        </>
    )
}