// Import the Vendor model from the models directory
const Vendor = require('../models/vendor');

/**
 * Controller to get all vendors
 */
exports.getAllVendors = async (req, res) => {
  try {
    // Retrieve all vendors from the database
    const vendors = await Vendor.find();

    // Send the list of vendors with a 200 OK status
    res.status(200).json(vendors);
  } catch (err) {
    // Send a 500 Internal Server Error with the error message if something goes wrong
    res.status(500).json({ message: err.message });
  }
};

/**
 * Controller to get a single vendor by ID
 */
exports.getVendorById = async (req, res) => {
  try {
    // Find the vendor by the ID provided in the request parameters
    const vendor = await Vendor.findById(req.params.id);

    // If vendor is not found, return a 404 Not Found error
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });

    // Return the vendor data
    res.json(vendor);
  } catch (err) {
    // Handle potential errors (e.g., invalid ID format)
    res.status(500).json({ message: err.message });
  }
};

/**
 * Controller to create a new vendor
 */
exports.createVendor = async (req, res) => {
  try {
    // Create a new Vendor instance with the data from the request body
    const vendor = new Vendor(req.body);

    // Save the new vendor to the database
    await vendor.save();

    // Return the created vendor with a 201 Created status
    res.status(201).json(vendor);
  } catch (err) {
    // Handle validation errors or other issues with a 400 Bad Request status
    res.status(400).json({ message: err.message });
  }
};

/**
 * Controller to update an existing vendor by ID
 */
exports.updateVendor = async (req, res) => {
  try {
    // Find the vendor by ID and update it with new data from the request body
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,           // Return the updated document
      runValidators: true  // Ensure validation rules are applied to the update
    });

    // If the vendor does not exist, return a 404 Not Found error
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });

    // Return the updated vendor
    res.json(vendor);
  } catch (err) {
    // Handle validation or update errors
    res.status(400).json({ message: err.message });
  }
};

/**
 * Controller to delete a vendor by ID
 */
exports.deleteVendor = async (req, res) => {
  try {
    // Find the vendor by ID and delete it
    const vendor = await Vendor.findByIdAndDelete(req.params.id);

    // If the vendor was not found, return a 404 Not Found error
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });

    // Return a success message upon successful deletion
    res.json({ message: 'Vendor deleted' });
  } catch (err) {
    // Handle any errors during the delete operation
    res.status(500).json({ message: err.message });
  }
};
