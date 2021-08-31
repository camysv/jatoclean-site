"use strict";

// @TODO: Criar variaveis de ambiente

const { MongoClient } = require('mongodb');

let username = process.env.MONGO_USERNAME;
let password = process.env.MONGO_PASSWORD;
let url = process.env.MONGO_URL;

const uri = `mongodb+srv://${username}:${password}@${url}/retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function find(database, collection, query = {}, options = {}) {
    try {
        await client.connect();
        let col = client.db(database).collection(collection);
        return await col.find(query, options).toArray();
    } catch (err) {
        return err;
    } finally {
        await client.close();
    }
}

async function findOnlyOne(database, collection, query, options = {}) {
    try {
        await client.connect();
        let col = client.db(database).collection(collection);
        return await col.findOne(query, options);
    } catch (err) {
        return err;
    } finally {
        await client.close();
    }
}


async function insertOnlyOne(database, collection, document) {
    try {
        await client.connect();
        let col = client.db(database).collection(collection);
        return await col.insertOne(document);
    } catch (err) {
        return err;
    } finally {
        await client.close();
    }
}

async function removeOnlyOne(database, collection, query) {
    try {
        await client.connect();
        let col = client.db(database).collection(collection);
        return await col.deleteOne(query);
    } catch (err) {
        return err;
    } finally {
        await client.close();
    }
}

export { find, findOnlyOne, insertOnlyOne, removeOnlyOne };