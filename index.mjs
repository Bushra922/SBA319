import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';
import chineseSignsRoutes from './controllers/chineseSign.mjs';
import westernSignsRoutes from './controllers/westernSign.mjs';
import userRoutes from './controllers/user.mjs';

// creating express application and other variables
const app = express();
const PORT = process.env.PORT || 5050;

// app.use(express.json());

// ================ Set up view engine ================
//
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


// ================ Middleware ================
//
app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

// ================   westernSigns Routes ================//
//

app.use("/westernSigns", westernSignsRoutes);
app.use("/chineseSigns", chineseSignsRoutes);
app.use("/users", userRoutes);

app.get('/', (req, res) => {
    res.send(
        //`<div> this is my westernSigns and chineseSigns root route <br/><a href='/westernSigns'>westernSigns</a></div>`
        `<div> This is my ChineseSigns, WesternSigns, and Users root route <br /><a href='/ChineseSigns'>ChineseSigns</a><br /><a href='/westernSigns'>westernSigns</a><br /><a href='/users'>users</a> </div>`
    );
});

// //================chineseSigns Routes==============//

app.use("/chineseSigns", chineseSignsRoutes);
app.get('/', (req, res) => {
    res.send(
        `<div> this is my westernSigns and chineseSigns root route <br/><a href='/chineseSigns'>chineseSigns</a></div>`
    );
});

//================users Routes==============//

//app.use("/users", usersRoutes);
app.get('/', (req, res) => {
    res.send(
        `<div> This is my westernSigns, chineseSigns, and users root route <br/><a href='/users'>users</a></div>`
    );
});



app.listen(PORT, () => {
    console.log(`listening`);
});