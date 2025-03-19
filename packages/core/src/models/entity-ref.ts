import { Entity } from './entity';

export class EntityRef extends Entity {
    name?: string;

    constructor(id: string, name?: string) {
        super(id);
        this.name = name;
    }
}
