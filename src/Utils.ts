export default class Utils {

    constructor() {
        console.log('Hello World.');
        // const m = document.getElementById('message');
        // m && (m.innerHTML = 'Hello!');

        // Type
        const isA : boolean = true;
        const num : number = 1;
        const str : string = `aaaa`;

        // Enum
        enum Decision {
            YES,
            NO,
            Pending,
        }
        const decision : Decision = Decision.YES;
        console.log(`Decision[${decision}] = ${Decision[decision]}`);

        
        class Product {
            name : string;
            price : number;
            visible : boolean = false;

            constructor(name: string, price: number) {
                this.name = name;
                this.price = price;
            }
        
        }
        const productList : Product[] = [
            new Product('A', 100),
            new Product('B', 200),
            new Product('C', 300),
        ];
        productList.forEach(v => {
            v.visible = (v.price > 100);
        });
        console.info(productList);
    }
    
}
