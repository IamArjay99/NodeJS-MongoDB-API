const User = require("./../model/users");

module.exports = async (filter) => {
  try {
    await User.deleteOne(filter);
    return true;
  } catch (err) {
    return false;
  }
};
