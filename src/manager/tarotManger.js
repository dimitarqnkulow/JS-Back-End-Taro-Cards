const Tarot = require("../models/Tarot");

exports.getAll = async (search, from, to) => {
  let currentDeck = await Tarot.find().lean();

  if (search) {
    currentDeck = currentDeck.filter((x) =>
      x.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    currentDeck = await Tarot.find({ arcanNumber: { $gte: from } }).lean();
  }
  if (to) {
    currentDeck = await Tarot.find({
      arcanNumber: { $lte: to, $e: to },
    }).lean();
  }
  return currentDeck;
};

exports.getOneWithAccessories = (tarotId) =>
  this.getOne(tarotId).populate("accessories");

exports.getOne = (tarotId) => Tarot.findById(tarotId);

exports.create = async (tarotCardData) => {
  const newTarotCard = await Tarot.create(tarotCardData);

  return newTarotCard;
};

exports.attachAccessory = async (tarotId, accessoryId) => {
  // return Tarot.findByIdAndUpdate(tarotId, {
  //   $push: { accessories: accessoryId },
  // });
  const card = await Tarot.findById(tarotId);
  card.accessories.push(accessoryId);
  return card.save();
};

exports.update = (tarotId, tarotCardData) =>
  Tarot.findByIdAndUpdate(tarotId, tarotCardData);

exports.delete = (tarotId) => Tarot.findByIdAndDelete(tarotId);
