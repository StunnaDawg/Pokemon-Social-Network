const { Thoughts, User } = require("../models");

module.exports = {
    async getThoughts(req, res) {
      try {
        const posts = await Thoughts.find();
        res.json(posts);
      } catch (err) {
        res.status(500).json(err);
        console.info(err)
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
          res.status(500).json(err);
          console.info(err)
        }
      },
      async createThought(req, res) {
        try {
          const thought = await Thoughts.create(req.body);
          const user = await User.findOneAndUpdate(
            { username: req.body.username },
            { $addToSet: { thoughts: thought._id } },
            { new: true }
          );
    
          if (!user) {
            return res
              .status(404)
              .json({ message: 'No user to attach to the created thought' });
          }
    
          res.json('Thought Created!');
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
      async updateThought(req, res) {
        try {
            const findThoughtUpdate = await Thoughts.findByIdAndUpdate(
                req.params.thoughtId,
                {thoughtText: req.body.thoughtText},
                );
            res.json(findThoughtUpdate)
        } catch {
            res.status(500).json(err);
            console.info(err)
        }
      },
      async deleteThought(req, res) {
        try {
            const findThoughtDelete = await Thoughts.findByIdAndDelete(req.params.thoughtId);
            res.json(findThoughtDelete)
        } catch {
            res.status(500).json(err);
            console.info(err)
        }
    },
    async addReaction(req, res) {
        try {
            const { thoughtId } = req.params;
    
            // Make sure the friendId is valid
            const friend = await Thoughts.findById(thoughtId);
            if (!friend) {
                return res.status(404).json({ message: 'No user found with this friendId' });
            }
    
            const newReaction = new Reactions(req.body);

            // Then find the user with the given userId and add friendId to their friends array
            const reaction = await Thoughts.findByIdAndUpdate(
                thoughtId,
                { $addToSet: { reactions: newReaction} },
                { new: true, runValidators: true }
            );
    
            res.json(reaction);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },
    }