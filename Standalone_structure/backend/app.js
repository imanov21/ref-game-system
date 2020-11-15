const 	express     	= require("express"),
	    app         	= express(),
	    mongoose    	= require("mongoose"),
		passport    	= require("passport"),
    	LocalStrategy 	= require("passport-local"),
	  	methodOverride 	= require("method-override"),
	  	Achievement  	= require("./models/achievement"),
    	Task     		= require("./models/task"),
    	User        	= require("./models/user");
    
//requiring routes

const	indexRoutes    	= require("./routes/index");

const dbUrl = process.env.DATABASEURL || "mongodb://localhost:27017/chall_db";

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

app.use("/", indexRoutes);

app.listen(8080, function(){
	console.log('App successfully has started');
});