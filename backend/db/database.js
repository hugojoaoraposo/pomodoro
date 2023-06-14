const { ObjectId } = require("mongodb")
const { getMongoCollection } = require("./db")

const collectionName = "users"

async function findUserAuthByEmail(email) {
    const collection = await getMongoCollection(collectionName)
    return collection.findOne({ email: email })
}
async function findUserAuth(uid) {
    const collection = await getMongoCollection(collectionName)
    return collection.findOne({ _id: new ObjectId(uid) })
}
async function createUserAuth(data) {
    const collection = await getMongoCollection(collectionName)
    return collection.insertOne(data)
}

module.exports = {
    createUserAuth,
    findUserAuth,
    findUserAuthByEmail
}