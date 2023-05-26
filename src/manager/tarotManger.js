const uniqid = require("uniqid");

const tarotCards = [
  {
    id: "c8kij4cli0avh4y",
    name: "The Fool",
    description:
      "The Fool is numbered 0 – the number of unlimited potential – and so does not have a specific place in the sequence of the Tarot cards. The Fool can be placed either at the beginning of the Major Arcana or at the end. The Major Arcana is often considered The Fool’s journey through life and as such, he is ever present and therefore needs no number.",
    imageUrl:
      "https://www.purplegarden.co/blog/wp-content/uploads/2023/03/0-The-Fool-Tarot-card-img-182x300-1.jpg",
    arcanNumber: 0,
  },
  {
    id: "c8kij4cli0qzh6o",
    name: "The Hight Priestess",
    description:
      "The High Priestess sits in front of a thin veil decorated with pomegranates. The veil represents the separate conscious and subconscious realms, the seen and the unseen, and serves to keep casual onlookers out. Only the initiated may enter. The pomegranates on the veil are a symbol of abundance, fertility and the divine feminine, and are sacred to Persephone who ate a pomegranate seed in the underworld and was forced to return every year.",
    imageUrl:
      "https://www.purplegarden.co/blog/wp-content/uploads/2023/03/02-The-High-Priestess-Tarot-card-img-182x300-1.jpg",
    arcanNumber: 2,
  },
  {
    id: "c8kij4cli0qcv3j",
    name: "The Chariot",
    description:
      "The Chariot Tarot card shows a brave warrior standing inside a chariot. He wears armor decorated with crescent moons (representing what is coming into being), a tunic with a square (the strength of will) and other alchemical symbols (spiritual transformation). The laurel and star crown signals victory, success and spiritual evolution. Although he appears to be driving the chariot, the charioteer holds no reins – just a wand like The Magician’s – symbolizing that he controls through the strength of his will and mind.",
    imageUrl:
      "https://www.purplegarden.co/blog/wp-content/uploads/2023/03/07-The-Chariot-Tarot-card-img-182x300-1.jpg",
    arcanNumber: 7,
  },
];

exports.getAll = () => {
  const currentDeck = tarotCards.slice();
  return currentDeck;
};

exports.getOne = (tarotId) => tarotCards.find((x) => x.id == tarotId);

exports.create = (tarotCardData) => {
  const newTarotCard = {
    id: uniqid(),
    ...tarotCardData,
  };
  tarotCards.push(newTarotCard);

  return newTarotCard;
};
