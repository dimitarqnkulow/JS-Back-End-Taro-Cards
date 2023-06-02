const Tarot = require("../models/Tarot");

exports.getAll = async (search, from, to) => {
  let currentDeck = await Tarot.find().lean();

  if (search) {
    currentDeck = currentDeck.filter((x) =>
      x.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    currentDeck = currentDeck.filter((x) => x.arcanNumber >= from);
  }
  if (to) {
    currentDeck = currentDeck.filter((x) => x.arcanNumber <= to);
  }
  return currentDeck;
};

exports.getOne = (tarotId) => Tarot.findById(tarotId);

exports.create = async (tarotCardData) => {
  const newTarotCard = await Tarot.create(tarotCardData);

  return newTarotCard;
};
