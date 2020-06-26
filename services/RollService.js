class RollService {
  getRolls(count) {
    const rolls = [];
    for (let i = 0; i < count; i++) {
      rolls.push(Math.floor(Math.random() * 10) + 1);
    }
    return rolls;
  }
  getHits(rolls, modifier, combat, diceSides) {
    let hits = 0;
    rolls.forEach(roll => {
      if (Number(roll) + Number(modifier) >= Number(combat) || roll === Number(diceSides)) {
        hits++;
      }
    })
    return hits;
  }
  getResult(unit){
    const rolls = this.getRolls(unit.count);
    const hits = this.getHits(rolls, unit.modifier, unit.combat, unit.diceSides);
    return  {
      unitName: unit.name,
      diceSides: "10",
      combat: unit.combat,
      count: unit.count,
      modifier: unit.modifier,
      hits: hits,
      rolls: rolls,
    };
  };

  rollForUnits(units){
    return units.map(unit => this.getResult(unit))
  };
}

module.exports = {
  RollService,
}
