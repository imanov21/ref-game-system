const express = require("express"),
    path = require('path'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User = require("/models/user");

//requiring routes

const indexRoutes = require("routes");

const dbUrl = "mongodb+srv://dbuser1:topcodeR37@Cluster0.vvlrr.mongodb.net/icando?retryWrites=true&w=majority"

mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log("DB Connection Error: " + err.message);
    });

app.use(methodOverride("_method"));

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Science conference is very important!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.static("public"));

app.use("/", indexRoutes);

// Choose the port and start the server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})