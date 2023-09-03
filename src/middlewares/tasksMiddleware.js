const validateTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ message: 'The "title" field is required and cannot be empty' });
  }

  next();
};

const validateStatus = (req, res, next)=>{
  const { status } = req.body;

  if (!status || status.trim() === "") {
    return res.status(400).json({ message: 'The "status" field is required and cannot be empty' });
  }

  next();
}

module.exports = {
  validateTitle,
  validateStatus
};
