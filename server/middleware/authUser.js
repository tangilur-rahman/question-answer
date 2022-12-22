// external modules
const jwt = require("jsonwebtoken");
const userModel = require("./../model/userModel");

const tokenVerify = async (req, res, next) => {
	try {
		const user = await jwt.verify(
			req.cookies.question_answer,
			process.env.SECRET_KEY
		);

		const document = await userModel.findOne({
			_id: user._id
		});

		// insert current user document into request object
		req.currentUser = document;

		next();
	} catch (error) {
		res.status(500).json({ error: "Authentication Failed!" });
	}
};

module.exports = tokenVerify;
