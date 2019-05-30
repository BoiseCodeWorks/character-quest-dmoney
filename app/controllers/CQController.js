import express from 'express'
import CQService from '../services/CQService'

let _cqService = new CQService()
let _repo = _cqService.repository

export default class CQController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllCQs)
      .get('/characters/:characterId/quests/:questId', this.getCQ)
      .put('/:id', this.editCQ)
      .post('', this.createCQ)
      .delete('/:id', this.deleteCQ)
      .use('*', this.defaultRoute)
  }

  async getAllCQs(req, res, next) {
    try {
      let cqs = await _repo.find({})
      return res.send(cqs)
    } catch (error) { next(error) }
  }
  async getCQ(req, res, next) {
    try {
      let cq = await _repo.findOne({ characterId: req.params.id, questId: req.params.id }).populate('characterId').populate('questId')
      return res.send(cq)
    } catch (error) { next(error) }
  }
  async editCQ(req, res, next) {
    try {
      let cqs = await _repo
    } catch (error) {

    }
  }
  async createCQ(req, res, next) {
    try {
      let cq = await _repo.create(req.body)
      return res.status(201).send(cq)
    } catch (error) {
      next(error)

    }
  }
  async deleteCQ(req, res, next) {
    try {
      let cqs = await _repo
    } catch (error) {

    }
  }

  defaultRoute(req, res, next) {
    next({ status: 400, message: 'no such cq' })
  }

}