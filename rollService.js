const roll = unit => {
  const result = {
    unitName: unit.name,
    diceSides: "10",
    combat: unit.combat,
    count: unit.count,
    modifier: unit.modifier,
    hits: 0,
    rolls: [],
  };

  for (let i = 0; i < unit.count; i++) {
    const roll = Math.floor(Math.random() * 11);
    result.rolls.push(roll);
    if (roll + unit.modifier >= unit.combat || roll === result.diceSides) {
      result.hits++;
    }
  }
  return result;
};

const rollForUnits = (units, response) => {
  return response.status(200).json(units.map(unit => roll(unit)));
};

module.exports = {
  rollForUnits,
}
