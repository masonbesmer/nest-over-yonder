import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import { ObjectSchema } from 'yup';
import { Double, Int32 } from 'mongodb';

const app = express();
const port = 4000;

const uri = "mongodb+srv://Dylan:Dylan@cluster0.htbdf2m.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('connected to your Dylan database');
    })
    .catch((err) => {
        console.log('Error connecting to database:', err);
    });

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
        password:{
            type: String,
            required: true,
        },
    });

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
            startDate: { type: Date, required: false },
            endDate: { type: Date, required: false }
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
app.use(express.json());
app.use(cors());

// API endpoint for user registration
app.post('/register', async(req, res)=>{
    try{
        const { fname, lname, phone, email, password} = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if(existingUser){
            // alert("Email is already being used");
            return res.status(400).json({ message: 'Email is already being used' });
        }

        // Create new user
        const newUser = new User({ fname, lname, phone, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    }
    catch(error){
        console.log('Error registering user:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

app.get('/users', async (req, res) => {
    try{
        const users = await User.find({});

        res.json(users);
    }
    catch(error){
        console.error('Error getting users:', error);
        res.status(500).json({ message: 'Something went wrong'});
    }
});

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

app.post('/newtransaction', async(req, res)=>{
    try{
        const { name, email,  cardNum, cardExp, cardCVV, zipCode, country,  startDate, endDate, totalNights, totalPrice, listId, transactionId, userId, hostId} = req.body;
        // Create new transaction
        const newTransaction = new Transaction({name, email,  cardNum, cardExp, cardCVV, zipCode, country,  startDate, endDate, totalNights, totalPrice, listId, transactionId, userId, hostId});
        await newTransaction.save();

        // const listIdInt = parseInt(listId);
        // const listing = await Listing.findOne({ listId: listIdInt });
        // if (!listing) {
        //     return res.status(404).json({ message: 'Listing not found' });
        // }
        // listing.reservedDates.push(new Date(startDate), new Date(endDate));
        // await listing.save();

        res.status(201).json({ message: 'Transaction completed successfully' });
    }
    catch(error){
        console.log('Error confirming transaction:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

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