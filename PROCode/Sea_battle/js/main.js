class Warship {
  constructor(Team_name, Health_points, Damage) {
    this.Health_points = Health_points;
    this.Damage = Damage;
    this.is_sunk = false;
    this.Team_name = Team_name;
  }
  shoot(warship) {
      let damage = Math.floor((Math.random()*40 + 80)/100*this.Damage); 
      warship.Health_points -= damage;
      console.log(this.Team_name + " hit " + warship.Team_name + " with damage " + damage);
      if(warship.Health_points <= 0) {
        warship.is_sunk = true;
        console.log(warship.Team_name + " ship sunk");
      }
  }
}

function find_ship(team) {
  for (let i = 0; i < 1; i++) {
    if (!team[i].is_sunk) {
      return team[i];
    }
  }
  return null;
}

const warship1 = new Warship("Team1", 100, 4);
const warship2 = new Warship("Team2", 40, 15);

let team1 = [warship1];
let team2 = [warship2];

while (true) {
    let ws1 = find_ship(team1);
    if (ws1 == null) {
        console.log('*************Team1 lost**************');
        break;
    };
    let ws2 = find_ship(team2);
    if (ws2 == null) {
        console.log('*************Team2 lost**************');
        break;
    }
    ws1.shoot(ws2);
    ws2 = find_ship(team2);
    if (ws2 == null) {
        console.log('**************Team2 lost**************');
        break;
    };
    ws2.shoot(ws1);
  
}
  



















  