import { Entity, HttpMethod } from '@diucsealumni/core';
import { PagedContent } from './paged-content';
import { Query, QueryFilter } from './query';

export class BaseService<T extends Entity> {
    protected url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getById(id: string) {
        const url = `${this.url}/${id}`;
        const response = await fetch(url);
        return await response.json() as T;
    }

    async getPaged(page: number, filter: QueryFilter) {
        const queryString = new Query(page, filter).getQueryString();
        const url = `${this.url}?${queryString}`;
        const response = await fetch(url);
        return await response.json() as PagedContent<T>;
    }

    async create(entity: T) {
        const response = await fetch(this.url, {
            method: HttpMethod.POST,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entity),
        });
        return await response.json() as T;
    }

    async update(id: string, entity: T) {
        const url = `${this.url}/${id}`;
        const response = await fetch(url, {
            method: HttpMethod.PATCH,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entity),
        });
        return await response.json() as T;
    }

    async delete(id: string) {
        const url = `${this.url}/${id}`;
        const response = await fetch(url, {
            method: HttpMethod.DELETE,
        });
        return response.ok;
    }
}
