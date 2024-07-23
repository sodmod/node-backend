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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.getAllUsersController = exports.getUserByIdController = exports.createUserController = void 0;
const userService_1 = require("../service/userService");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("we are getting there");
    const user = req.body;
    const newUser = yield (0, userService_1.createUser)(user);
    res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const user = yield (0, userService_1.getUserById)(id);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
exports.getUserByIdController = getUserByIdController;
const getAllUsersController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userService_1.getAllUsers)();
    res.status(201).json(users);
});
exports.getAllUsersController = getAllUsersController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const user = req.body;
    const [updated] = yield (0, userService_1.updateUser)(id, user);
    if (updated) {
        const updatedUser = yield (0, userService_1.getUserById)(id);
        res.status(200).json(updatedUser);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const deleted = yield (0, userService_1.deleteUser)(id);
    if (deleted) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
exports.deleteUserController = deleteUserController;
