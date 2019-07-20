function Fighter (data) {
    const maxGameValue = 100;
    this.name = data.name;
    this.damage = data.damage;
    this.hp = data.hp;
    this.agility = data.agility;

    this.getName = () => {
        return this.name;
    }
    this.getDamage = () => {
        return this.damage;
    }
    this.getHealth = () => {
        return this.hp;
    }
    this.getAgility = () => {
        return this.agility;
    }
    this.attack = (A) => {
        const dead = 0;
        let facilityAttack = maxGameValue - A.getAgility();
        let happenAttack = Math.round(Math.random() * maxGameValue);
        if (facilityAttack > happenAttack) {
            A.hp = A.getHealth() - this.getDamage();
            console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + A.getName());
            if (A.getHealth() === dead) {
                console.log(A.getName() + ' is dead');
            }
        } else {
            console.log(this.getName() + ' attack missed')
        }    
        }
        let winCounter = 0;
        let lossCounter = 0;
        
        this.logCombatHistory = () => {
            return 'Name: ' + this.getName() + ', ' + 'Wins: ' + winCounter + ', ' + 'Losses: ' + lossCounter;
        }
        this.heal = (heal) => {
            this.hp = this.hp + heal;
            if (this.hp > maxGameValue){
                this.hp = maxGameValue;
            }
        }
        this.dealDamage = (dealDamage) => {
            this.hp = this.getHealth() - dealDamage;
            if (this.getHealth() < 0 ) {
                this.hp = 0;
            } 
        }
        this.addWin = () => winCounter++;
        this.addLoss = () => lossCounter++;

    }
    function battle (fighter1, fighter2) {
        let attack;
        if (fighter1.getHealth() === 0) {
            console.log(fighter1.getName() + ` is dead and can't fight`);
        } else if (fighter2.getHealth() === 0) {
            console.log(fighter2.getName() + ` is dead and can't fight`);
        } else {
            while(fighter1.getHealth() && fighter2.getHealth()) {
                if (attack) {
                    fighter2.attack(fighter1);
                    attack = false;
                } else {
                    fighter1.attack(fighter2);
                    attack = true;
                }
            }
        } 
        if (fighter2.getHealth() === 0) {
            fighter1.addWin();
            fighter2.addLoss();
        } else {
            fighter2.addWin();
            fighter1.addLoss();
        }
    }
   

