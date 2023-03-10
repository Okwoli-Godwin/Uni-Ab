"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usercontroller_1 = require("../Controller/Usercontroller");
const userValidation_1 = require("../Validation/Auth/userValidation");
const Userrouters = (0, express_1.Router)();
Userrouters.route("/get").get(Usercontroller_1.getUsers);
Userrouters.route("/register").post(userValidation_1.registerValidation, Usercontroller_1.register);
Userrouters.route("/Login").post(userValidation_1.loginValidation, Usercontroller_1.Login);
exports.default = Userrouters;
