import { PagedContentPage } from './paged-content';

export type QueryFilter = Record<string, string | number>;

export class Query {
    page: number = 1;
    pageSize: number = PagedContentPage.Size;
    filter: QueryFilter = {};

    constructor(page: number, filter: QueryFilter) {
        this.filter = filter;
        this.page = page;
    }

    getQueryString(): string {
        return `${this.createFilter(this.filter)}&page=${this.page}&pageSize=${this.pageSize}`;
    }

    static fromString(queryString: string): Query {
        const query = new Query(1, {});
        const parts = queryString.split('&');
        parts.forEach((part) => {
            const [key, value] = part.split('=');
            if (key === 'page') {
                query.page = parseInt(value, 10);
            } else if (key === 'pageSize') {
                query.pageSize = parseInt(value, 10);
            } else {
                query.filter[key] = value;
            }
        });

        return query;
    }

    private createFilter(filter: QueryFilter): string {
        const filterKeys = Object.keys(filter);
        const value = (key: string) => typeof filter[key] === 'string' ? `${filterKeys[key]}`: filterKeys[key];
        return filterKeys.map((key) => `${key}=${value(key)}`).join('&');
    }
}
