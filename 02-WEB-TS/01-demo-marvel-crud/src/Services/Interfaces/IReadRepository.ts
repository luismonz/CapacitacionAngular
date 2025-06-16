export interface IReadRepository<Entity>
{

    getById(id: number): Entity;
    getAll(): Entity[];

}