const 	express     	= require("express"),
		path = require('path'),
	    app         	= express(),
	    mongoose    	= require('mongoose'),
		passport    	= require("passport"),
    	LocalStrategy 	= require("passport-local"),
	  	methodOverride 	= require("method-override"),
	  	Achievement  	= require("../models/achievement"),
    	Task     		= require("../models/task"),
    	User        	= require("../models/user"),
		UserHistory     = require("../models/user_history"),
		UserAchievement = require("../models/users_achievement");
    
//requiring routes

const	indexRoutes    	= require("../routes");

const dbUrl = "mongodb+srv://dbuser1:topcodeR37@Cluster0.vvlrr.mongodb.net/icando?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

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

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use("/", indexRoutes);

app.listen(PORT, function(){
	console.log(`server started on port ${PORT}`);
});