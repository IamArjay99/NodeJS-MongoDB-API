const User = require("./../model/users");

module.exports = async (filter, data) => {
  try {
    await User.updateOne(filter, data);
    return true;
  } catch (err) {
    return false;
  }
};
