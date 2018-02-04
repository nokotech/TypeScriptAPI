import * as Enumerable from 'linq';

export interface Info {
    no : number;
    name : string;
    description : string;
}

export class InfoDTO {

    list : Info[] = [
        { no: 1, name: 'name1', description: 'description1' },
        { no: 2, name: 'name2', description: 'description2' },
        { no: 3, name: 'name3', description: 'description3' },
        { no: 4, name: 'name4', description: 'description4' },
        { no: 5, name: 'name5', description: 'description5' },
    ];

    map : Map<string, number> = new Map<string, number>([
        ['A', 1],
        ['B', 2],
        ['C', 3],
        ['D', 4],
        ['E', 5],
    ]);

    patern(orderByDesc : boolean = true) : Enumerable.IEnumerable<Info> {
        const where1 = (v : Info, i : number) => (v.no > 3);
        const result : Enumerable.IEnumerable<Info> = Enumerable.from(this.list).where(where1);
        orderByDesc && result.orderByDescending(item => item.no);
        return result;
    }

    one(): Info {
        return this.patern().firstOrDefault();
    }

    filter() : Info[] {
        return this.list.filter(v => (v.no > 3));
    }
}

