export default function listReducer(state, action) {
    return [{
            _id: 1,
            description: "tarefa 1 mock",
            done: false
        },
        {
            _id: 2,
            description: "tarefa 2 mock",
            done: true
        },
        {
            _id: 3,
            description: "tarefa 3 mock",
            done: false
        }
        ]
}