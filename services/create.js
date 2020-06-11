const User = require("./../model/users");

module.exports = async (data) => {
  try {
    await User.create(data);
    return true;
  } catch (err) {
    return false;
  }
};
