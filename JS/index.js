"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
let app = (0, express_1.default)();
let userSchema = new mongoose_1.default.Schema({
    name: String,
});
let USER = mongoose_1.default.model("User", userSchema);
app.get("/about", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb+srv://villegasalrandolph:ViLLEGAS_AR2846@cluster0.owih4qv.mongodb.net/usersDB");
        let users = yield USER.find();
        res.send(users);
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(5000, () => {
    console.log(`Server is running on port 5000...`);
});
