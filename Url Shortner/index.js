// const express = require("express");

// const app = express();
// const port = 8001;
// const UrlRoute = require('./routes/url')
// const {connectMongoose} = require('./connect');

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
// app.use("/url",UrlRoute)
// app.use("/url/:id",UrlRoute)



// connectMongoose('mongodb://127.0.0.1:27017/urlShortner')
// .then(()=>{
//     console.log("Connected to MongoDB");
// })
// .catch(err => console.error(err))

// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const app = express();
const port = 8001;
const UrlRoute = require('./routes/url');
const { connectMongoose } = require('./connect');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for URL operations
app.use("/", UrlRoute);

// Connect to MongoDB
connectMongoose('mongodb://127.0.0.1:27017/urlShortner')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => console.error("MongoDB connection error:", err));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
