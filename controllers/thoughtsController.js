const { Thoughts } = require("../models");

module.exports = {
    async getThoughts(req, res) {
      try {
        const posts = await Thoughts.find();
        res.json(posts);
      } catch (err) {
        res.status(500).json(err);
      }
    }
}