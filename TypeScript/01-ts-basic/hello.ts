function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}.`)
}

greet('小峰', new Date())

// let surename: string = undefined
// let age: number = null