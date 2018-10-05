const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');


// GENERAL/BASE LEVEL
router.get('/user', (req, res) => {
  res.render('users/user');
});

router.get('/heh', (req, res) => {
  res.render('heh');
});

router.get('/profile', (req, res) => {
  res.render('users/profile');
});

// router.post('/', (req, res, next) => {
//   bcrypt.hash(req.body.password, 12)
//     .then(password_digest => knex('users')
//       .insert({
//         username: req.body.email,
//         password_digest,
//       }, '*'))
//     .then((users) => {
//       const user = users[0];
//       delete user.password_digest;
//       res.send(user);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// ADD NEW USER:
router.post('/user_login', (req, res) => knex('users')
  .insert({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }, '*')
  .then((users) => {
    res.render('users/profile', { users });
  }));
  
// EDIT CURRENT USER
router.get('/edit_user/:id', function(req, res, next) {  
  knex('users').where('id',req.params.id).then((users)=>{
    if(!users) {
      return next();
    }
        res.render('users/edit_user',{users}); 
  })
    .catch((err)=>{
    next(err);
    })
});  

router.patch('/edit_user/:id',(req,res, next)=>{
  knex('users')
    .where('id',req.params.id)
    .then((users) => {
    knex('users')
      .update({ 
          name: req.body.name,
          email: req.body.email,
          password: req.body.password}, '*')
      .where('id',req.params.id)
      .then(() => {
        res.redirect(302, '/profile');
      });
    })
    .catch((err)=>{
      next(err);
    })
}); 

module.exports = router;
