'use strict'
module.exports = (app) => {
  let transcriptionController = require("../controllers/transcription_controller");

  app.route("/api/transcriptions")
    .post(transcriptionController.transcriptions);

  app.route("/api/transcribe")
    .get(transcriptionController.transcibe);

  app.route("/api/transcribe/result/callback")
    .get(transcriptionController.callback);

  app.route("/api/transcriptions/:id")
    .get(transcriptionController.show)
    .delete(transcriptionController.delete);

  app.route('*')
    .get((req, res) => {
      res.status(404).send({
        error: `Whoops! ${req.originalUrl} not found`
      });
    })
    .post((req, res) => {
      res.status(404).send({
        error: `Whoops! ${req.originalUrl} not found`
      });
    })
    .put((req, res) => {
      res.status(404).send({
        error: `Whoops! ${req.originalUrl} not found`
      });
    });
}