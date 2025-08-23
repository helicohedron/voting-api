import { Vote } from './model.js';

export async function create(req,res) {
  const { pollId, option, voter } = req.body;
  
  const existingVoter = await Vote.find({voter});
  if (existingVoter) {
    return res.status(400).json({
      success: false,
      message: 'ERROR: Voter has already cast a vote',
    });
  };

  const vote = new Vote({
    pollId,
    option,
    voter,
  });

  
  try {
    await vote.save();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error,
    });
  };

  return res.status(201).json({
    success: true,
    message: 'Successfully created a vote',
    data: vote,
  });
};


export async function getVotes(req,res) {
  try {
    const pollId  = req.params.id;
    const foundVotes = await Vote.find({pollId});

    if (!foundVotes || foundVotes.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Vote cannot be found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully retrieved vote',
      data: foundVotes,
    });    
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  };


};