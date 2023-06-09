exports.majorArcanOptions = (arcanNumber) => {
  const titles = [
    "The Fool",
    "The Magician",
    "The High Priestess",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Lovers",
    "The Chariot",
    "Strength",
    "The Hermit",
    "The Wheel of Fortune",
    "Justice",
    "The Hanged Man",
    "Death",
    "Temperance",
    "The Devil",
    "The Tower",
    "The Star",
    "The Moon",
    "The Sun",
    "Judgment",
    "The World",
  ];

  const options = titles.map((title, index) => ({
    title: `${title}`,
    value: index,
    isSelected: arcanNumber === index,
  }));

  return options;
};
