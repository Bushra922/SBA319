import express from 'express';
const router = express.Router();
// import chineseSigns from '../models/chineseSigns.mjs';
import chineseSigns from '../models/chineseSigns.mjs';
import db from '../db/conn.mjs';


/////////////////



router.get("/seed", async(req, res) => {
console.log('in seed');
try {
await chineseSigns.create([
    {
        name: 'Monkey',
        years: '1992',
        readyToRead : false
    },
    {
        name: 'Horse',
        years: '1990',
        readyToRead : true
    },
    {
        name: 'Rabbit',
        years: '1999',
        readyToRead : false
    },
    {
        name: 'Rooster',
        years: '1993',
        readyToRead : false
    }
])
res.status(200).redirect('/chineseSigns');
    } catch (err) {
        res.status(400).send(err);
    }
});



//N - NEW - allows
router.get('/new', (req, res) => {
    res.render('chineseSigns/New');
})
// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
    try {
        const foundChineseSigns = await chineseSigns.find({});
        res.status(200).render('chineseSigns/Index', { chineseSigns: foundChineseSigns})
        // res.status(200).send(foundchineseSigns);
    } catch (err) {
        res.status(400).send(err);
    }
})
//D - DELETE - allows a user to remove an item from the database
router.delete('/:id', async(req, res) => {
    try {
const deletedChineseSigns = await chineseSigns.findByIdAndDelete(req.params.id);
console.log(deletedChineseSigns);
res.status(200).redirect('/chineseSigns');
    } catch (err) {
res.status(400).send(err);
    }
})
//U-UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.readyToRead === 'on') {
    req.body.readyToRead = true;
} else {
    req.body.readyToRead = false;
}
try {
const updatedChineseSigns = await chineseSigns.findByIdAndUpdate(
req.params.id,
req.body, { new: true},
);
res.redirect(`/chineseSigns/${req.params.id}`);
} catch (err) {
    res.status(400).send(err);
}
})
//C-CREATE
// I am starting with my post route so taht I can see the things in my database
router.post('/', async(req, res) => {
    console.log(req.body)
   /// this will be useful when have a user input form
    if (req.body.readyToRead === 'on') { // if checked, req.body.readyToEat is set to 'on' - or the checkbox is checked
        req.body.readyToRead = true;
    } else {                            // if not checked, then it was undefined
        req.body.readyToRead = false;
    }
    console.log(req.body)
    try {
        const createdchineseSigns= await chineseSigns.create(req.body);
        res.status(200).send(createdchineseSigns);
    } catch (err) {
        res.status(400).send(err);
    }
})
//E -- EDIT - UPDATE
router.get("/:id/edit" , async (req, res) => {
    try{
        const foundChineseSigns= await chineseSigns.findById(req.params.id);
        res.status(200).render('chineseSigns/Edit', {chineseSigns: foundChineseSigns});
    } catch (err) {
        res.status(400).send(err);
    }
})
//S - SHOW route displayhs details of an individual chineseSigns
router.get('/:id', async (req, res) => {
    try {
const foundChineseSigns= await chineseSigns.findById(req.params.id);
res.render('chineseSigns/Show', {chineseSigns: foundChineseSigns});
    } catch(err) {
    res.status(400).send(err);
    }
})
export default router;