import { Entity } from '@diucsealumni/core';
import { PagedContent } from './paged-content';
import { Query, QueryFilter } from './query';

export class BaseService<T extends Entity> {
    protected url: string;

    async getById(id: string) {
        const response = await fetch(this.url + '/' + id);
        return await response.json() as T;
    }

    async getPaged(page: number, filter: QueryFilter) {
        const queryString = new Query(page, filter).getQueryString();
        const response = await fetch(this.url + queryString);
        return await response.json() as PagedContent<T>;
    }
}
