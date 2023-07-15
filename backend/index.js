import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";

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

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});