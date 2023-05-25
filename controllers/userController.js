const Users = require('../models/Users');

module.exports = {
    async getUsers(req, res) {
      try {
        const users = await Users.find();
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
            .populate('thoughts');
    
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
}