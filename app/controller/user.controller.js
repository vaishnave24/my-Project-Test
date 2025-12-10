exports.getUser = async (req, res) => {
    console.log("getuser called");
    res.json({ message: "User fetched successfully" });
};