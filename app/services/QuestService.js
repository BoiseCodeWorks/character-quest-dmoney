import mongoose from 'mongoose'

// let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  objective: { type: String, required: true },
  exp: { type: Number, required: true },
  reward: { type: String, required: true },
  description: { type: String }
})


export default class QuestService {
  get repository() {
    return mongoose.model('quest', _schema)
  }
}