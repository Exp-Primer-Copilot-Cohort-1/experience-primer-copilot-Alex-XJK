// Create web server
// 1. Load the express module
var express = require("express");
var app = express();
// 2. Load the body-parser module
var bodyParser = require("body-parser");
// 3. Load the mongoose module
var mongoose = require("mongoose");
// 4. Load the Comments model
var Comment = require("./models/Comment");
// 5. Load the Post model
var Post = require("./models/Post");
// 6. Load the User model
var User = require("./models/User");
// 7. Load the express-session module
var session = require("express-session");
// 8. Load the bcrypt module
var bcrypt = require("bcrypt");
// 9. Load the connect-mongo module
var MongoStore = require("connect-mongo")(session);
// 10. Load the moment module
var moment = require("moment");
// 11. Load the express-fileupload module
var fileUpload = require("express-fileupload");
// 12. Load the express-flash module
var flash = require("express-flash");
// 13. Load the nodemailer module
var nodemailer = require("nodemailer");
// 14. Load the dotenv module
var dotenv = require("dotenv");
// 15. Load the cloudinary module
var cloudinary = require("cloudinary");
// 16. Load the multer module
var multer = require("multer");
// 17. Load the path module
var path = require("path");
// 18. Load the fs module
var fs = require("fs");
// 19. Load the async module
var async = require("async");
// 20. Load the crypto module
var crypto = require("crypto");
// 21. Load the https module
var https = require("https");
// 22. Load the request module
var request = require("request");
// 23. Load the cheerio module
var cheerio = require("cheerio");
// 24. Load the json2csv module
var json2csv = require("json2csv");
// 25. Load the csvtojson module
var csvtojson = require("csvtojson");
// 26. Load the xlsx module
var xlsx = require("xlsx");
// 27. Load the json2xls module
var json2xls = require("json2xls");
// 28. Load the jsonexport