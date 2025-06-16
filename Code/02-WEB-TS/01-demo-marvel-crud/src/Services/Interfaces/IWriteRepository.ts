export interface IWriteRepository<Entity> 
{

    create(entity: Entity): void;
    update(id: number, updatedEntity: Partial<Entity>): boolean;
    delete(id: number): boolean;

}