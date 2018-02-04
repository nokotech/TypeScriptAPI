import { Info } from '../dataset/Info.ts';

export default class IndexedDBManager {

    db : IDBDatabase;

    constructor() {
        (async () => {
            const initBool : boolean = await this.initialize();
            const registBool : boolean = await this.regist({ no: 1, name: 'name', description: 'description' });
            const val : any = await this.get(1);
            // console.log(val);
        })();
        /*
        this.initialize()
        .then((pass : boolean) => this.regist())
        .then(() => {
            this.get(1).then((v : any) => console.log(v));
        });
        */
    }

    initialize() : Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!window.indexedDB) {
                window.alert('このブラウザは安定版の IndexedDB をサポートしていません。IndexedDB の機能は利用できません。');
                return reject(true);
            }
            // データベースを開く
            const request : IDBOpenDBRequest = window.indexedDB.open('TestDatabase', 5);
            request.onupgradeneeded = (event : Event) => {
                this.db = (<IDBRequest>event.target).result;
                const store : IDBObjectStore = this.db.createObjectStore('info', { keyPath: 'no' });
                store.createIndex('index', 'no');
                this.successHandler(event);
                return resolve(true);
            };
            request.onsuccess = (event : Event) => {
                this.db = (<IDBRequest>event.target).result;
                this.successHandler(event);
                return resolve(true);
            };
            request.onerror = (event : Event) => {
                this.errorHandler(event);
                return reject(true);
            };
        });
    }

    // 登録
    regist(info : Info, method = 'put') : Promise<boolean>  {
        return new Promise((resolve, reject) => {
            const trans : IDBTransaction = this.db.transaction('info', 'readwrite');
            const store : IDBObjectStore = trans.objectStore('info');
            const request = (method === 'put') ? store.put(info) : store.add(info);
            request.onsuccess = (event : Event) => {
                this.successHandler(event);
                return resolve(true);
            };
            request.onerror = (event : Event) => {
                this.errorHandler(event);
                return reject(true);
            };
        });
    }

    get(key : number) : Promise<Info> {
        return new Promise((resolve, reject) => {
            const trans : IDBTransaction = this.db.transaction('info', 'readwrite');
            const store : IDBObjectStore = trans.objectStore('info');
            const request = store.get(key);
            request.onsuccess = (event : Event) => {
                const result : Info = <Info>(<IDBRequest>event.target).result;
                return resolve(result);
            };
            request.onerror = (event : Event) => {
                return reject(null);
            };
        });
    }

    // 処理成功
    successHandler(event : Event) {
        // console.log(`successHandler`, this.db);
    }

    // 処理失敗
    errorHandler(event : Event) {
        window.alert(`IndexedDBがクラッシュしました。`);
    }

}

