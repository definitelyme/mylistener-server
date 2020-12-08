const Exception = require('../models/exceptions/exception');
const transcribeFromUri = require('./uri');

exports.transcriptions = (req, res) => {
  //
};

exports.transcibe = async(req, res) => {
  // let result = await transcribeFromUri(req.query.audio);
  // console.log(`Result ==> ${result.toJson()}`);
  try {
    let result = await transcribeFromUri(req.query.audio);
    console.log(`Result ==> ${result.toJson()}`);

    res.json({
      "error": null,
      "result": result.toJson()
    });
  } catch (e) {
    res.send({
      "error": e instanceof Exception ? e.toJson() : {
        "message": e.message
      },
      "result": null
    });
  }
};

exports.show = (req, res) => {
  //
};

exports.callback = (req, res) => {
  res.json({
    "error": null,
    "status": "OK",
    "result": "Callback called! Audio transcribed",
  });
};

exports.delete = (req, res) => {
  //
};