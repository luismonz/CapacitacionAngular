import { initialHeroes } from "../../Data/Heroes";
import type { HeroModel } from "../../Models/HeroModel";
import type { IReadRepository } from "../Interfaces/IReadRepository";
import type { IWriteRepository } from "../Interfaces/IWriteRepository";

export class HeroesRepository implements IReadRepository<HeroModel>, IWriteRepository<HeroModel>
{

    private heroes: HeroModel[] = [...initialHeroes];

    getById(id: number): HeroModel {
        const findHero: HeroModel | undefined = this.heroes.find((hero) => hero.id == id);
        if(findHero == null) throw new Error("HERO NO ENCONTADO");
        return findHero;
    }

    getAll(): HeroModel[] {
        return [...this.heroes];
    }

    create(entity: HeroModel): void {
        this.heroes.push(entity);
    }

    update(id: number, updatedEntity: Partial<HeroModel>): boolean {
        const index: number = this.heroes.findIndex(h => h.id == id);
        if(index === -1) throw new Error("HERO NO ENCONTADO");
        this.heroes[index] = { ...this.heroes[index], ...updatedEntity };
        return true;
    }

    delete(id: number): boolean {
        const index: number = this.heroes.findIndex(h => h.id == id);
        if(index === -1) throw new Error("HERO NO ENCONTADO");
        this.heroes.splice(index, 1);
        return true;
    }

}