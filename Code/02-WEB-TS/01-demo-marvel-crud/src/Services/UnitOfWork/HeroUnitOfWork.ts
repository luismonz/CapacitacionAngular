import { HeroesRepository } from "../Repositories/HeroesRepository";


export class HeroUnitOfWork {

    private _heroRepository: HeroesRepository;

    constructor() { 
        this._heroRepository = new HeroesRepository();
    }

    public HeroRepository(): HeroesRepository {
        return this._heroRepository;
    }

}