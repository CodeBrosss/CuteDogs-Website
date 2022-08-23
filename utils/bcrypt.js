const bcrypt = require('bcryptjs');

const hashedPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

const comparePassword = async (bodyPassword, dbPassword) => {
	return await bcrypt.compare(bodyPassword, dbPassword);
};

module.exports = { hashedPassword, comparePassword };
 