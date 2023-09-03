const getAll = (req, res)=>{
    return res.status(200).json({ message: 'Controller esta funcionando!'});
};

module.exports = {
    getAll,
}