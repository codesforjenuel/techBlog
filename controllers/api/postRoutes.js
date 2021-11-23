const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')
router.post('/',withAuth, async (req, res) => {
    try {console.log(req.body)
      const newPost = await Post.create({...req.body,userid: req.session.user_id});

  res.json(newPost)
     
    } catch (err) {
      res.status(400).json(err);
    }
  });



module.exports = router;