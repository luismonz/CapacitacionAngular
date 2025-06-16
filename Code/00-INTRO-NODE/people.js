class People {

    #name;

    constructor(name, age)
    {
        this.#name = name;
        this.age = age;
    }

    getName() {
        return this.#name;
    }

    greet()
    {
        return "HOLA A TODOS"
    }

}

module.exports = People;