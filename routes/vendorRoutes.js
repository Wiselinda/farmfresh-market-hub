const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

/**
 * @swagger
 * tags:
 *   name: Vendors
 *   description: Vendor management
 */

/**
 * @swagger
 * /api/vendors:
 *   get:
 *     summary: Get all vendors
 *     tags: [Vendors]
 *     responses:
 *       200:
 *         description: A list of vendors
 */
router.get('/', vendorController.getAllVendors);

/**
 * @swagger
 * /api/vendors/{id}:
 *   get:
 *     summary: Get vendor by ID
 *     tags: [Vendors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vendor ID
 *     responses:
 *       200:
 *         description: Vendor found
 *       404:
 *         description: Vendor not found
 */
router.get('/:id', vendorController.getVendorById);

/**
 * @swagger
 * /api/vendors:
 *   post:
 *     summary: Create a new vendor
 *     tags: [Vendors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, contactEmail]
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               contactEmail:
 *                 type: string
 *               phone:
 *                 type: string
 *               location:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Vendor created
 *       400:
 *         description: Bad request
 */
router.post('/', vendorController.createVendor);

/**
 * @swagger
 * /api/vendors/{id}:
 *   put:
 *     summary: Update vendor
 *     tags: [Vendors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vendor ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Vendor updated
 *       404:
 *         description: Vendor not found
 */
router.put('/:id', vendorController.updateVendor);

/**
 * @swagger
 * /api/vendors/{id}:
 *   delete:
 *     summary: Delete vendor
 *     tags: [Vendors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vendor ID
 *     responses:
 *       200:
 *         description: Vendor deleted
 *       404:
 *         description: Vendor not found
 */
router.delete('/:id', vendorController.deleteVendor);

module.exports = router;
