import { Vote } from './model.js';
import { Poll } from '../polls/model.js';
import { getOne } from '../polls/controller.js';

export async function create(req,res) {
  const { pollId, option, voter, timestamps } = req.body;

  const vote = new Vote({
    pollId,
    option,
    voter,
    timestamps,
  });
  
  try {
    const { success, message } = getOne(pollId);
    
    if (!success) {
      return res.status(400).json({
        success: false,
        message: message,
      });
    };

    await vote.save();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error,
    });
  };

  res.status(201).json({
    success: true,
    message: 'Successfully created a vote',
    data: vote,
  });
};


export async function getOne(req,res) {
  try {
    const { id }
  } catch (error) {

  };
};