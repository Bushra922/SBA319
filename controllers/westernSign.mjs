import express from 'express';
const router = express.Router();
// import westernSigns from '../models/westernSigns.mjs';
import westernSign from '../models/westernSigns.mjs';
import db from '../db/conn.mjs';



//////////////////////////



router.get("/seed", async(req, res) => {
console.log('in seed');
try {
await westernSign.create([
    {
        name: 'Aries',
        dates: 'March 21 - April 19.',
        readyToRead : false
    },
    {
        name: 'Virgo',
        dates: 'August 23 - September 22',
        readyToRead : true
    },
    {
        name: 'Aquarius',
        dates: 'January 20 - February 18',
        readyToRead : false
    },
    {
        name: 'Sagittarius',
        dates: 'greNovember 22 - December 21en',
        readyToRead : false
    }
])
res.status(200).redirect('/westernSigns');
    } catch (err) {
        res.status(400).send(err);
    }
});


//N - NEW - allows
router.get('/new', (req, res) => {
    res.render('westernSigns/New');
})
// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
    try {
        const foundWesternSigns = await westernSign.find({});
        res.status(200).render('westernSigns/Index', { westernSigns: foundWesternSigns})
        // res.status(200).send(foundwesternSigns);
    } catch (err) {
        res.status(400).send(err);
    }
})
//D - DELETE - allows a user to remove an item from the database
router.delete('/:id', async(req, res) => {
    try {
const deletedWesternSigns = await westernSign.findByIdAndDelete(req.params.id);
console.log(deletedWesternSigns);
res.status(200).redirect('/westernSigns');
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
const updatedWesternSign = await westernSign.findByIdAndUpdate(
req.params.id,
req.body, { new: true},
);
console.log(updatedWesternSign);
res.redirect(`/westernSigns/${req.params.id}`);
} catch (err) {
    res.status(400).send(err);
}
})
//C-CREATE
// I am starting with my post route so taht I can see the things in my database
router.post('/', async(req, res) => {
    // this will be useful when have a user input form
    if (req.body.readyToRead === 'on') { // if checked, req.body.readyToEat is set to 'on' - or the checkbox is checked
        req.body.readyToRead = true;
    } else {                            // if not checked, then it was undefined
        req.body.readyToRead = false;
    }
    console.log(req.body)
    try {
        const createdwesternSign = await westernSign.create(req.body);
        res.status(200).redirect('/westernSigns');
    } catch (err) {
        res.status(400).send(err);
    }
})
//E -- EDIT - UPDATE
router.get("/:id/edit" , async (req, res) => {
    try{
        const foundWesternSign= await westernSign.findById(req.params.id);
        res.status(200).render('westernSigns/Edit', {westernSign: foundWesternSign});
    } catch (err) {
        res.status(400).send(err);
    }
})
//S - SHOW route displayhs details of an individual fruit
router.get('/:id', async (req, res) => {
    try {
const foundWesternSign= await westernSign.findById(req.params.id);
res.render('westernSigns/Show', {westernSign: foundWesternSign});
    } catch(err) {
    res.status(400).send(err);
    }
})
export default router;