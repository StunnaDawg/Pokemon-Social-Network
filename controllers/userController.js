const Users = require('../models/Users');

module.exports = {
    async getUsers(req, res) {
      try {
        const users = await Users.find()
        .select('-__v')
        .populate('thoughts')
        .populate('friends');
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
        console.info(err)
      }
    }, 
    async getSingleUser(req, res) {
        try {
          const user = await Users.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .populate('friends');
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
    
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async createUser(req, res) {
        try {
          const dbUserData = await Users.create(req.body);
          res.json(dbUserData);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async deleteUser(req, res) {
        try {
            const findUserDelete = await Users.findByIdAndDelete(req.params.userId);
            res.json(findUserDelete)
        } catch {
            res.status(500).json(err);
            console.info(err)
        }
      },
      async updateUser(req, res) {
        try {
            const findUserUpdate = await Users.findByIdAndUpdate(
                req.params.userId,
                {username: req.body.username},
                );
            res.json(findUserUpdate)
        } catch {
            res.status(500).json(err);
            console.infor(err)
        }
      },
      async addFriend(req, res) {
        try {
            const { userId, friendId } = req.params;
    
            // Make sure the friendId is valid
            const friend = await Users.findById(friendId);
            if (!friend) {
                return res.status(404).json({ message: 'No user found with this friendId' });
            }
    
            // Then find the user with the given userId and add friendId to their friends array
            const user = await Users.findByIdAndUpdate(
                userId,
                { $addToSet: { friends: friendId } },
                { new: true, runValidators: true }
            );
    
            if (!user) {
                return res.status(404).json({ message: 'No user found with this userId' });
            }
    
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    }, 
    async deleteFriend(req, res) {
        try {
            const { userId, friendId } = req.params;
    
            // Make sure the friendId is valid
            const friend = await Users.findById(friendId);
            if (!friend) {
                return res.status(404).json({ message: 'No user found with this friendId' });
            }
    
            // Then find the user with the given userId and add friendId to their friends array
            const user = await Users.findByIdAndUpdate(
                userId,
                { $pull: { friends: friendId } },
                { new: true, runValidators: true }
            );
    
            if (!user) {
                return res.status(404).json({ message: 'No user found with this userId' });
            }
    
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    }
}