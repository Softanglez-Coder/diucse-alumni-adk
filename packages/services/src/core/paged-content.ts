export class PagedContent<T> {
    contents: T[];
    page: PagedContentPage;

    constructor(contents: T[], total: number, currentPage: number) {
        this.contents = contents;
        this.page = new PagedContentPage(total, currentPage);
    }
}

export class PagedContentPage {
    static Size: number = 10;

    current: number;
    next: number;
    previous: number;
    total: number;

    isLastPage: boolean;
    isFirstPage: boolean;

    constructor(total: number, currentPage: number) {
        this.current = currentPage;
        this.total = Math.ceil(total / PagedContentPage.Size);

        this.next = currentPage < this.total ? currentPage + 1 : this.total;
        this.previous = currentPage > 1 ? currentPage - 1 : 1;

        this.isLastPage = currentPage === this.total;
        this.isFirstPage = currentPage === 1;
    }
}
