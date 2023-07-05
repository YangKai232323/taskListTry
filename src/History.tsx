interface Props {
    history: []
}

export function History({ history }: Props) {
    return (
        <ul className="flex gap-2 mt-2 bg-slate-400 p-2 rounded-md flex-col-reverse">
            {history.map((historyElement) => {
                if (historyElement[2] === 'active') {
                    return (
                        <li className="shadow-md p-2 bg-sky-200 rounded-md break-all">
                            Task "{historyElement[0]}" added to "
                            {historyElement[1]}"
                        </li>
                    )
                }
                if (historyElement[2] === 'deleted') {
                    return (
                        <li className="shadow-md p-2 bg-red-200 rounded-md break-all">
                            Task "{historyElement[0]}" deleted from "
                            {historyElement[1]}"
                        </li>
                    )
                }
                if (historyElement[2] === 'completed') {
                    return (
                        <li className="shadow-md p-2 bg-emerald-200 rounded-md break-all">
                            You complete task "{historyElement[0]}" from "
                            {historyElement[1]}"
                        </li>
                    )
                }
            })}
        </ul>
    )
}
