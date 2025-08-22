import { Poll } from './model.js';

export async function getAll(req, res) {
  const allPolls = await Poll.find();

  res.json({
    success: 'Retrieved all polls',
    data: allPolls,
  });
}

// Add more logic
export async function create(req, res) {
  // GET all fields needed from req.body
  const { question, options, status, timestamp } = req.body;

  const poll = new Poll({
    question,
    options,
    status,
    timestamp,
  });

  // ATTEMPT to save
  // HANDLE error
  try {
    await poll.save();
  } catch (error) {
    res.status(400).json({
      error: 'Something went wrong',
      details: error,
    });
  };
  
  // RESPONSE created status with poll
  res.status(201).json({
    success: 'Successfully created poll',
    // newly add poll
  });
}

export async function getOne(req, res) {
  // FIND poll from req.params
  // IF NON then response 404
  // OTHERWISE response the poll
  res.json({
    success: 'Successfully get one poll',
    // find poll
  });
}
