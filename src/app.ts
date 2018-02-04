import Utils from './utils/Utils.ts';
import IndexedDBManager from './utils/IndexedDBManager.ts'
import * as Info from './dataset/Info.ts' 

new Utils();
new IndexedDBManager();

new Info.InfoDTO().patern().forEach((item : Info.Info, index : number) => {
    console.log(`${item.no} : ${item.name}`);
});
