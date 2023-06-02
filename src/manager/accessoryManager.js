const Accessory = require("../models/Accessory");

exports.getAll = () => Accessory.find();

exports.create = async (accessoryData) => {
  const newAccessory = await Accessory.create(accessoryData);

  return newAccessory;
};