export default function handler(req, res) {
  const q = req.query
  console.log(`[analytics] type: ${q.type} from: ${q.from}`)
  res.status(200).send('')
}
