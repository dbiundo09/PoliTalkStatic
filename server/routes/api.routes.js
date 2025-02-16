import express from 'express';
import { testConnection } from '../controllers/auth.controller.js';

const router = express.Router();

// Test route
router.get('/test', testConnection);

export default router; 