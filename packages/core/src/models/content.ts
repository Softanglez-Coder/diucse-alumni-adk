import { EntityRef } from './entity-ref';
import { Entity } from './entity';

export class Content extends Entity {
    name?: string;

    createdAt?: string;
    createdBy?: EntityRef = new EntityRef(null);

    modifiedAt?: string;
    modifiedBy?: EntityRef = new EntityRef(null);

    deletedAt?: string;
    deletedBy?: EntityRef = new EntityRef(null);

    constructor(id: string, name?: string) {
        super(id);
        this.name = name;
    }
}
