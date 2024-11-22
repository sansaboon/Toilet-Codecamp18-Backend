const notFoundHandler = (req, res) => {
    // code
    res.status(404).json({message: "Not found"})
}

module.exports = notFoundHandler