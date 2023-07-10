interface Props {
    history: []
}

export function History({ history }: Props) {
    return (
        <ul className="mt-2 flex flex-col-reverse gap-2 rounded-md bg-slate-400 p-2">
            {history.map((historyElement) => {
                if (historyElement[2] === 'active') {
                    return (
                        <li className="break-all rounded-md bg-sky-200 p-2 shadow-md">
                            Task "{historyElement[0]}" added to "
                            {historyElement[1]}"
                        </li>
                    )
                }
                if (historyElement[2] === 'deleted') {
                    return (
                        <li className="break-all rounded-md bg-red-200 p-2 shadow-md">
                            Task "{historyElement[0]}" deleted from "
                            {historyElement[1]}"
                        </li>
                    )
                }
                if (historyElement[2] === 'completed') {
                    return (
                        <li className="break-all rounded-md bg-emerald-200 p-2 shadow-md">
                            You complete task "{historyElement[0]}" from "
                            {historyElement[1]}"
                        </li>
                    )
                }
            })}
        </ul>
    )
}
