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
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.getUserById = exports.createUser = void 0;
const useModel_1 = __importDefault(require("../models/useModel"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield useModel_1.default.create(user);
});
exports.createUser = createUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Use
    return yield useModel_1.default.findByPk(id);
});
exports.getUserById = getUserById;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield useModel_1.default.findAll();
});
exports.getAllUsers = getAllUsers;
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield useModel_1.default.update(user, {
        where: { id },
        returning: true
    });
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield useModel_1.default.destroy({
        where: { id },
    });
});
exports.deleteUser = deleteUser;
