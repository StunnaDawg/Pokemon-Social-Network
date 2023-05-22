const { Thoughts, User } = require("../models");

module.exports = {
    async getThoughts(req, res) {
      try {
        const posts = await Thoughts.find();
        res.json(posts);
      } catch (err) {
        res.status(500).json(err);
      }
    }, 
    async getSingleThought(req, res) {
        try {
          const singleThought = await Thoughts.findOne({ _id: req.params.thoughtId });
    
          if (!singleThought) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
    
          res.json(singleThought);
        } catch (err) {
          res.status(500).json(err)
        }
      },
      async createThought(req, res) {
        try {
          const thought = await Thoughts.create(req.body);
          const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id } },
            { new: true }
          );
    
          if (!user) {
            return res
              .status(404)
              .json({ message: 'No user to attach to the created thought' });
          }
    
          res.json('Created the post 🎉');
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
}