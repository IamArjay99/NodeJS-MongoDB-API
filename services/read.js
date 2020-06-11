const User = require("./../model/users");

module.exports = async (filter) => {
  try {
    const result = await User.find(filter);
    return result;
  } catch (err) {
    return [];
  }
};
