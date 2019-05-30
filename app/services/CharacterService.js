import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  professionId: { type: ObjectId, ref: 'profession', required: true, default: '5cf0152f6762531e889fef58' },
  userId: { type: ObjectId, ref: 'user', required: true }
})


export default class ProfessionService {
  get repository() {
    return mongoose.model('character', _schema)
  }
}