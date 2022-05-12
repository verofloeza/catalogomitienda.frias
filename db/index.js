import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('catalogo.db');

export const init = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS productos (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, marca TEXT NOT NULL, precio TEXT NOT NULL, descripcion TEXT NOT NULL, categorias TEXT NOT NULL, usuario TEXT NOT NULL);",
            [],
            () => resolve(),
            (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const insertProductos = (title, image, marca, precio, descripcion, categorias, user) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO productos (title, image, marca, precio, descripcion, categorias, usuario) values (?, ?, ?, ?, ?, ?, ?);",
                [title, image, marca, precio, descripcion, categorias, user],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
} 

export const fetchProductos = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM productos;",
                [],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}