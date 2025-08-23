import { Poll } from './model.js';

export async function getAll(req, res) {
  const allPolls = await Poll.find();

  res.json({
    success: true,
    message: 'Retrieved all polls',
    data: allPolls,
  });
}

// Add more logic
export async function create(req, res) {
  // GET all fields needed from req.body
  const { question, options, status, timestamps } = req.body;

  const poll = new Poll({
    question,
    options,
    status,
    timestamps,
  });

  // ATTEMPT to save
  // HANDLE error
  try {
    await poll.save();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error,
    });
  };
  
  // RESPONSE created status with poll
  res.status(201).json({
    success: true,
    message: 'Successfully created poll',
    // newly add poll
    data: poll,
  });
};

export async function getOne(req, res) {
  // FIND poll from req.params
  try {
    const { id } = req.params;
    const foundPoll = await Poll.findById(id);
    // IF NON then response 404
    if (!foundPoll) {
      return res.status(404).json({
        success: false,
        message: 'Poll cannot be found',
      });
    }
    // OTHERWISE respond with the poll
    return res.json({
      success: true,
      message: 'Successfully retrieved poll',
      // find poll
      data: foundPoll,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong.',
      details: error,
    });
  };
};
