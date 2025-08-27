import express from "express";

import { people } from "../data.js";
import { createUser, UpdateUser, RemoveUser, allUsers } from "../controller/people.js";
const router = express.Router()


router.route('/').get(allUsers).post(createUser);
router.route('/:id').put(UpdateUser).delete(RemoveUser);