import { faker } from "@faker-js/faker"
import clientPromise from "@/lib/mongodb"
import { labels, priorities, statuses } from "./data"

async function seed() {
  const client = await clientPromise
  const db = client.db() 
  const collection = db.collection("tasks")

  await collection.deleteMany({}) 

  const tasks = Array.from({ length: 100 }, () => ({
    id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.hacker.phrase().replace(/^./, letter => letter.toUpperCase()),
    status: faker.helpers.arrayElement(statuses).value,
    label: faker.helpers.arrayElement(labels).value,
    priority: faker.helpers.arrayElement(priorities).value,
  }))

  await collection.insertMany(tasks)

  console.log("✅ Tasks inserted into MongoDB.")
  process.exit(0)
}

seed().catch(err => {
  console.error("❌ Seeding failed:", err)
  process.exit(1)
})
