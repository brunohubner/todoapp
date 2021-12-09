const taskKey = "__task_list"

const INITIAL_STORAGE = {
    tasks: [{
        _id: 1,
        description: "Fazer exercícios",
        done: false,
        createdAt: 1639091362300
    }, {
        _id: 2,
        description: "Estudar programação",
        done: false,
        createdAt: 1639091487724
    }, {
        _id: 3,
        description: "Dar banho no cachorro",
        done: false,
        createdAt: 1639091498014
    }, {
        _id: 4,
        description: "Treinar o inglês",
        done: false,
        createdAt: 1639091508934
    }, {
        _id: 5,
        description: "Limpar a casa",
        done: false,
        createdAt: 1639092588065
    }, {
        _id: 6,
        description: "Jogar futebol",
        done: false,
        createdAt: 1639092684972
    }],
    count: 6
}

export default class LocalDB {

    setStorage(tasks, count) {
        localStorage.setItem(
            taskKey,
            JSON.stringify({ tasks, count })
        )
    }

    getStorage() {
        return JSON.parse(localStorage.getItem(taskKey)) || INITIAL_STORAGE
    }

    getCount() {
        return this.getStorage().count || 0
    }

    add(description) {
        if(!description.trim() || description.length > 32) return
        const data = this.getStorage()
        const tasks = data.tasks
        const count = data.count + 1

        tasks.push({
            _id: count,
            description: description,
            done: false,
            createdAt: Date.now()
        })
        this.setStorage(tasks, count)
    }

    getAll(description = "") {
        let tasks = this.getStorage().tasks
        if(tasks.length === 0) return []
        if(!!description) {
            tasks = tasks.filter(t => t.description.includes(description))
        }
        return tasks.sort((a, b) => b.createdAt - a.createdAt)
    }

    update(task, done) {
        const data = this.getStorage()
        let newTasks = data.tasks.filter(t => t._id !== task._id)
        newTasks.push({ ...task, done: done })
        this.setStorage(newTasks, data.count)
    }

    remove(_id) {
        const data = this.getStorage()
        const newTasks = data.tasks.filter(t => t._id !== _id)
        this.setStorage(newTasks, data.count)
    }
}