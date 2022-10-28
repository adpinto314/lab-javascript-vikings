// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(theDamage){
       this.health = this.health - theDamage
    }
};

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength
    }
    receiveDamage(theDamage){
        this.health = this.health - theDamage

        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
            }

        if (this.health <= 0){
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
};

const Ragnar = new Viking("Ragnar", 11, 6);
// Saxon

class Saxon extends Soldier{
    attack(){
        return this.strength
    }
    receiveDamage(theDamage){
        this.health = this.health - theDamage
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        }
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
      }
}
function getRandom(max) {
    return Math.floor(Math.random() * max)
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        


        let randomVikingIndex = getRandom(this.vikingArmy.length);
        let randomSaxonIndex = getRandom(this.saxonArmy.length);

        let theViking = this.vikingArmy[randomVikingIndex];
        let theSaxon = this.saxonArmy[randomSaxonIndex];

        let damage = theSaxon.receiveDamage(theViking.strength);
        if (theSaxon.health <= 0){
        this.saxonArmy.splice(randomSaxonIndex,1);
        }
        
        return damage

    }
    saxonAttack(){
        let randomVikingIndex = getRandom(this.vikingArmy.length);
        let randomSaxonIndex = getRandom(this.saxonArmy.length);

        let theViking = this.vikingArmy[randomVikingIndex];
        let theSaxon = this.saxonArmy[randomSaxonIndex];

        let damage = theViking.receiveDamage(theSaxon.strength);
        if (theViking.health <= 0){
        this.vikingArmy.splice(randomVikingIndex,1);
        }
        
        return damage
      }

    showStatus(){
        
        if(this.saxonArmy == 0){
            return 'Vikings have won the war of the century!'
        }
        else if(this.vikingArmy == 0) {
            return 'Saxons have fought for their lives and survived another day...'
        }
        else if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}

