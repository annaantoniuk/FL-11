class Fighter {

}


function Fighter1 (name, damage, agility, hp) {
    this.name = name,
    this.damage = damage,
    this.agility = agility,
    this.hp = hp;
} 
const hero = new Fighter1({name: 'John', damage: 20, hp: 100, agility: 25}); 
console.log(hero.name.name)