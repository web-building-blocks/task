// seed.mjs
import { faker } from '@faker-js/faker'
import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('task')
const collection = db.collection('tasks')

await collection.deleteMany({})

const statuses = ['todo', 'in progress', 'done']
const priorities = ['low', 'medium', 'high']
const labels = ['bug', 'feature', 'documentation']

const tasks = Array.from({ length: 50 }, (_, i) => ({
  id: `TASK-${i + 1}`,
  title: faker.hacker.phrase(),
  status: faker.helpers.arrayElement(statuses),
  priority: faker.helpers.arrayElement(priorities),
  label: faker.helpers.arrayElement(labels),
}))

await collection.insertMany(tasks)
console.log('✅ Seeded 50 tasks to MongoDB')

await client.close()
