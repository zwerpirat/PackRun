import express, { Request, Response, Router } from 'express';
import User from '../models/userModel';
import uploadDirectory from '../app';
import multer from 'multer'; 

const router: Router = express.Router();

// Defining routes for the User: 

// CHAT: 
// (GET): get all messages from the database
// (POST): add a message to the chat
// (PUT): edit a message

// RUNNING ROUTES
// (POST): add a new run to the database
// (DELETE): remove run from the database
// (PUT): edit an already existing run

// PROFILE:
// (GET): show all data stored under user id
// (PUT): edit profile 
// (GET): show all stored routes (runs) from the user



export default router;