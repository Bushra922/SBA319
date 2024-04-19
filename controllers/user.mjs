import express from 'express';
const router = express.Router();
import User from '../models/users.mjs';
import db from '../db/conn.mjs';
// seed route
router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
      await User.create([
        { name: 'Olivia Wilson',
         email: 'alice@gmail.com',
         DOB:  30 },

        { name: 'Bob Johnson',
         email: 'bob@yahoo.com',
         DOB: 35 },
        {
        name: 'Emily Davis',
        email: 'Emily@rr.com',
        DOB: 25 }
      ]);
      res.status(200).redirect("/users");
    } catch (err) {
      res.status(400).send(err);
    }
  });
// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
    try {
        const foundUsers = await User.find({});
        res.status(200).render('users/Index', { users: foundUsers})
        //
    } catch (err) {
        res.status(400).send(err);
    }
})
// N - New - allows a user to input a new User
router.get('/new', (req, res) => {
    res.render('users/New');
})
//ID- DELETE--
router.delete('/:id', async( req, res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        // console.log(deletedUser);
        res.status(200).redirect('users');
    } catch (err) {
        res.status(400).send(err);
    }
    }
)
// U - UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.readyToRead === 'on') {
        req.body.readyToRead = true;
    } else {
        req.body.readyToRead = false;
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedUser);
        res.redirect(`/users/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})
// C - CREATE
// I am starting with my post route so that I can see the things in my database
router.post('/', async(req, res) => {
    // Convert readyToRead checkbox value to boolean
    req.body.readyToRead = req.body.readyToRead === 'on';

    try {
        // Create a new user using the validated request body
        const createdUser = await User.create(req.body);
        res.status(200).redirect('/users');
    } catch (err) {
        // If there are validation errors or other errors during user creation, send an error response
        res.status(400).send(err);
    }
});

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.status(200).render('users/Edit', {user: foundUser});
    } catch (err) {
        res.status(400).send(err);
    }
})
// S - SHOW - show route displays details of an individual fruit
router.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.render('users/Show', {user: foundUser});
    } catch (err) {
        res.status(400).send(err);
    }
})
export default router;