interface Props {
    history: []
}

export function History({ history }: Props) {
    return (
        <ul className="flex gap-2 flex-col mt-2 bg-slate-400 p-2 rounded-md flex-col-reverse">
            {history.map((historyElement) =>
                historyElement[2] === false ? (
                    <li className="shadow-md p-2 bg-emerald-100 rounded-md">
                        Task "{historyElement[0]}" added to "{historyElement[1]}
                        "
                    </li>
                ) : (
                    <li className="shadow-md p-2 bg-red-100 rounded-md">
                        Task "{historyElement[0]}" deleted from "
                        {historyElement[1]}"
                    </li>
                )
            )}
        </ul>
    )
}
