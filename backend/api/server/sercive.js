const { ObjectId } = require("mongodb")
const { getMongoCollection } = require("../data")

const COLLECTION = "ciclos"

export async function countCircle (userId) {
    const collection = await getMongoCollection(COLLECTION)
    const user = await collection.findOne({ _id: userId });

    return user
}




export async function incrementCircle(userId){
    const collection = await getMongoCollection(COLLECTION)
    const updatedUser = await collection.findOneAndUpdate(
    { _id: userId },
    { $inc: { cycleCount: 1 } },
    { returnOriginal: false }
  )
    }