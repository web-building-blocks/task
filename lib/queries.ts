// lib/queries.ts
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"
import { Task } from "@/data/schema"

export async function getTasks(): Promise<Task[]> {
  const client = await clientPromise
  const db = client.db()

  const raw = await db
    .collection<Task & { _id: ObjectId }>("tasks")  
    .find({})
    .sort({ id: 1 })
    .toArray()


  const tasks = raw.map(({ _id, ...rest }) => ({
    ...rest,

  }))

  return tasks
}
