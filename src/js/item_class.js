export class Item {
  constructor(name,Id,worth,Hp,level,status,flags,rarity) {
    this.name = name;
    this.Id = Id;
    this.worth = worth;
    this.Hp = Hp;
    this.level = level;
    this.status = status;
    this.flags = flags;
    this.rarity = rarity;
  }
}

export class Weapon extends Item {  
  constructor(slot,atk,dam,name,Id,worth,Hp,level,status,flags,rarity) {
    super(name,Id,worth,Hp,level,status,flags,rarity);
    this.atk = atk;
    this.dam = dam;
    this.slot = slot;
  }
}

export class Armor extends Item {
  constructor(slot,acBonus,type,name,Id,worth,Hp,level,status,flags,rarity) {
    super(name,Id,worth,Hp,level,status,flags,rarity);
    this.acBonus = acBonus;
    this.type = type;  
    this.slot = slot;
  }
}
 
export class Container extends Item {
  constructor(type,capacity,name,Id,worth,Hp,level,status,flags,rarity) {
    super(name,Id,worth,Hp,level,status,flags,rarity);
    this.type = type;
    this.contents = [];
    this.capacity = capacity;
  }
}

export class Consumable extends Item {
  constructor(action,type,name,Id,worth,Hp,level,status,flags,rarity) {
    super(name,Id,worth,Hp,level,status,flags,rarity);
    this.action = action;
    this.type = type; 
  }
}
// ex: let healingPotion1 = new Consumable (["heal","self",1,"d",8,1],"potion","Healing Potion",1,100,1,5,[],["consume on use"],"common")