export class People 
{

    public name: string;
    public age: number;
    private lastname: string;

    constructor(name: string, age: number, lastname: string)
    {
        this.name = name;
        this.age = age;
        this.lastname = lastname;
    }

    public showInfo()
    {
        return `MY INFO IS ${this.name} ${this.age} ${this.lastname}`
    }

}