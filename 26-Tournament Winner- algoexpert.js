

competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ],results = [0, 0, 1]

//1st self approach 
//Time complexity : O(n^2) , space - O(n)
// function tournamentWinner(competitions, results) {
//     let winner_obj = {};
//     let tournament_winner;
//   competitions.forEach((teams,index) => {
//         let winner = teams[results[index] == 0 ? 1: 0];
//        if(winner_obj.hasOwnProperty(winner)){
//         winner_obj[winner] += 3;
//        }
//        else{
//         winner_obj[winner] =3;
//        }
//   });
//   tournament_winner = Object.keys(winner_obj).reduce((a, b) => winner_obj[a] > winner_obj[b] ? a : b);
//   return tournament_winner;
// }


//Second approah 
//Time complexity : O(n) , space - O(n)
function tournamentWinner(competitions, results) {
    let winner_obj = {};
    let tournament_winner = '';
  competitions.forEach((teams,index) => {
        let winner = teams[results[index] == 0 ? 1: 0];
    if(!winner_obj.hasOwnProperty(tournament_winner)){
          winner_obj[tournament_winner] = 0;
    }
       if(winner_obj.hasOwnProperty(winner)){
        winner_obj[winner] += 3;
       }
       else{
        winner_obj[winner] =3;
       }
       if(winner_obj[winner] > winner_obj[tournament_winner]){
        tournament_winner = winner;
       }
  });
  return tournament_winner;
}

console.log(tournamentWinner(competitions,results))