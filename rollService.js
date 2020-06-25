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
    const roll = Math.floor(Math.random() * 10) + 1;
    result.rolls.push(roll);
    if (Number(roll) + Number(unit.modifier) >= Number(unit.combat) || roll === Number(result.diceSides)) {
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
