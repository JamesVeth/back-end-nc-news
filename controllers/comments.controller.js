const { fetchComments } = require("../models/comments.model");

exports.getComments = (req, res, next) => {
  fetchComments()
    .then((comments) => {
      res.status(200).send({ comments });
    })
    .catch(next);
};
