import { fruits } from './index.js'

const map = {}
for (const item of fruits) {
  const key = item.name
  map[key] = item
}

export default function fruit(req, res) {
  const { name } = req.query
  if (map[name]) {
    res.status(200).json(map[name])
  } else {
    res.status(404).json({})
  }
}
