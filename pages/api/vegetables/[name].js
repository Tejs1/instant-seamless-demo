import { vegetables } from './index.js'

const map = {}
for (const item of vegetables) {
  const key = item.name
  map[key] = item
}

export default async function vegetable(req, res) {
  const { name } = req.query
  await new Promise((resolve) => setTimeout(resolve, 3000))
  if (map[name]) {
    res.status(200).json(map[name])
  } else {
    res.status(404).json({})
  }
}
