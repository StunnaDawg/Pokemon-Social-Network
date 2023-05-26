const { Thoughts, User } = require("../models");

// api routes functions to do the right actions
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
            //addtoset pushes the thought id to the array in the users model
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
      // the ability to update a thought
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
    
            // makes sure thought is found first
            const verifyThought = await Thoughts.findById(thoughtId);
            if (!verifyThought) {
                return res.status(404).json({ message: 'No user found with this friendId' });
            }
    

            // then find and update it with the reaction
            const reaction = await Thoughts.findByIdAndUpdate(
                thoughtId,
                { $addToSet: { reactions: req.body } },
                { new: true, runValidators: true }
            );
    
            res.json(reaction);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },
    async deleteReaction(req, res) {
        try {
            const { thoughtId, reactionId } = req.params;

        const verifyThought = await Thoughts.findById(thoughtId);
        if (!verifyThought) {
            return res.status(404).json({ message: 'No thought found with this id' });
        }
        const thoughtReaction = await Thoughts.findByIdAndUpdate(
            thoughtId,
            // pull is the opposite of addtoset, removes id from array
            { $pull: { reactions: { _id: reactionId }} },
            { new: true, runValidators: true }
        );
    
            res.json(thoughtReaction);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },
    }