export class Entity {
    id: string;

    constructor(id: string) {
        if ( !id ) {
            throw new Error('Entity id is required');
        }

        this.id = id;
    }
}
