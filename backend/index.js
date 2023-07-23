import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import session from "express-session";
import passport from 'passport';
import { serialize, parse } from 'cookie'
import { Strategy as LocalStrategy } from 'passport-local';
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies.js' //for encryption (not used at the moment)
import { ObjectSchema } from 'yup';
import { Double, Int32 } from 'mongodb';

const app = express();
const port = 4000;
// const TOKEN_SECRET = "this-is-a-secret-value-with-at-least-32-characters"; //for encryption (do not uncomment unless working on encryption)

// Connect to MongoDB
const uri = "mongodb+srv://Dylan:Dylan@cluster0.htbdf2m.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to your Dylan database');
})
.catch((err) => {
    console.log('Error connecting to database:', err);
});

// Define the User Schema
const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Add a method to the UserSchema for comparing passwords
UserSchema.methods.comparePassword = function (password) {
    return password === this.password;
};

    const ListingSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        amenities: {
            type: {
                kitchen: Boolean,
                washer: Boolean,
                dryer: Boolean,
                ac: Boolean,
                wifi: Boolean,
                heat: Boolean,
                parking: Boolean,
            },
            required: false,
        },
        city: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        host: {
            type: String,
            required: true,
        },
        hostId: {
            type: Number,
            required: true,
        },
        imgPath: {
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        rating:{
            type: Number,
            required: true,
        },
        maxGuests:{
            type: Number,
            required: true,
        },
        type:{
            type: String,
            required: true,
        },
        listId:{
            type: Number,
            required: true,
        },
        reservedDates:[{
            startDate: { type: String, required: false },
            endDate: { type: String, required: false },
            _id: {type: String, required: false}
        }],
        bath:{
            type: Number,
            required: true
        },
        bed:{
            type: Number,
            required: true
        },
        area:{
            type: Number,
            required: false
        },
    });

    const TransactionSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        cardNum:{
            type: String,
            required: true,
        },
        cardExp: {
            type: String,
            required: true,
        },
        cardCVV:{
            type: Number,
            required: true,
        },
        zipCode:{
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        startDate: {
            type: String,
            required: true,
        },
        endDate: {
            type: String,
            required: true,
        },
        totalNights: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        listId:{
            type: Number,
            required: true,
        },
        transactionId:{
            type: Number,
            required: false,
        },
        userId:{
            type: Number,
            required: false,
        },
        hostId: {
            type: Number,
            required: false,
        },
       
    });

// Create User model
const User = mongoose.model('user', UserSchema);

// Middleware to parse JSON
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with the actual domain of your frontend
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
// Handle pre-flight requests
app.options('*', cors(corsOptions));
app.use(express.json());

// Setup express-session middleware
app.use(
    session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { 

    },
})
);

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email', // using 'email' as the username field in the login form
        },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email });
                if (!user || !user.comparePassword(password)) {
                    return done(null, false);
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        console.log(user, "random string");
        done(null, user);
    } catch (error) {
        done(error);
    }
});

// Middleware to check if the user is authenticated
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'User not logged in' });
};

// API endpoint for user registration
app.post('/register', async (req, res) => {
    try {
        const { fname, lname, phone, email, password, id } = req.body;

        // Create new user
        const newUser = new User({ fname, lname, phone, email, password, id });
        await newUser.save();

        req.login(newUser, (err) => {
            if (err) {
                console.error('Error logging in after registration:', err);
                return res.status(500).json({ message: 'Something went wrong' });
            }

            // Return the user object
            return res.status(201).json({ message: 'User registered successfully', user: newUser });
        });
    } catch (error) {
        console.log('Error registering user:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// API endpoint to get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// API endpoint for user logout
app.get('/logout', (req, res) => {
    // Check if the user is authenticated before attempting to logout
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        // Logout the user by destroying the session
        req.logout();
        // Send a success response
        res.status(200).json({ message: 'Logout successful' });
    } else {
        // If the user is not authenticated, send an error response
        res.status(401).json({ message: 'Not authenticated' });
    }
});

//API endpoint to get one user
app.post('/user', async (req, res) => {
    try {
        console.log(req.body.email, 'some string');
        // console.log(req.email);
        if (req.body.email) {
            const user = await User.findOne({"email":req.body.email});
            res.json(user);
          }
    } catch (error) {
        console.error('Error getting user:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// API endpoint to get the current user
app.get('/users/current', isLoggedIn, (req, res) => {
    res.status(200).json(req.user);
});

// API endpoint for user login
app.post('/login', passport.authenticate('local'), (req, res) => {
    // If the authentication is successful, the user will be available in req.user
    // Set the user as authenticated in the session
    req.login(req.user, (err) => {
        if (err) {
            console.error('Error logging in after authentication:', err);
            return res.status(500).json({ message: 'Something went wrong' });
        }
        console.log(req.isAuthenticated())
        const session = {...req.user};
        // setLoginSession(res, session);
        // Send a success response
        res.status(200).json({ message: 'Login successful', user: req.user });
    });
});

//Not used but could be in the future for encryption.
export async function setLoginSession(res, session) {
    const createdAt = Date.now()
    // Create a session object with a max age that we can validate later
    const obj = { ...session, createdAt, maxAge: MAX_AGE }
    // const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults)
  
    setTokenCookie(res, obj)
}

//for Listings
const Listing = mongoose.model('listing', ListingSchema);
app.get('/listings', async (req, res) => {
    try{
        const listings = await Listing.find({});

        res.json(listings);
    }
    catch(error){
        console.error('Error getting listings:', error);
        res.status(500).json({ message: 'Something went wrong'});
    }
});

//for Transactions
const Transaction = mongoose.model('transaction', TransactionSchema);

//API endpoint for posting a new transaction
app.post('/newtransaction', async(req, res)=>{
    try{
        //grab all the basic data
        const { name, email,  cardNum, cardExp, cardCVV, zipCode, country,  startDate, endDate, totalNights, totalPrice, listId, transactionId, userId, hostId} = req.body;

        // Create new transaction
        const newTransaction = new Transaction({name, email,  cardNum, cardExp, cardCVV, zipCode, country,  startDate, endDate, totalNights, totalPrice, listId, transactionId, userId, hostId});
        await newTransaction.save();

        //if transaction worked, then append the reserved dates to the relevant listing
        const listIdInt = parseInt(listId);
        const listing = await Listing.findOne({ listId: listIdInt });
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        //pushing dates to listing
        listing.reservedDates.push({startDate: new Date(startDate), endDate: new Date(endDate)});
        await listing.save();
        

        res.status(201).json({ message: 'Transaction completed successfully' });
    }
    catch(error){
        console.log('Error confirming transaction:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

//API endpoint for getting transactions
app.get('/transactions', async (req, res) => {
    try{
        const transactions = await Transaction.find({});

        res.json(transactions);
    }
    catch(error){
        console.error('Error getting transactions:', error);
        res.status(500).json({ message: 'Something went wrong'});
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});