import express, { Request, Response, Router } from 'express';
import User from './models/user';
import uploadDirectory from './app';
import multer from 'multer'; 

const router: Router = express.Router();

// Defining routes for the User: 
// CHAT: 

// RUNNING ROUTES
// (GET): show all stored routes (runs) in the database
// (POST): add a new run to the database
// (DELETE): remove run from the database
// (PUT): edit an already existing run

//PROFILE:
// (PUT): edit profile 


export default router;