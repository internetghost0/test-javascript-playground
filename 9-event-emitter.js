const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on("response", (user, id) => {
    console.log(`data recieved from USER:${user} ID:${id}`)
})
customEmitter.on("response", () => {
    console.log("some other logic")
})

customEmitter.emit("response", 'john', 123)
