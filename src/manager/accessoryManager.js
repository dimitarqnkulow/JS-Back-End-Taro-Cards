const Accessory = require("../models/Accessory");

exports.getAll = () => Accessory.find();
exports.getRestOfAccessories = (accessoriesId) =>
  this.getAll().find({ _id: { $nin: accessoriesId } });
exports.create = async (accessoryData) => {
  const newAccessory = await Accessory.create(accessoryData);

  return newAccessory;
};
