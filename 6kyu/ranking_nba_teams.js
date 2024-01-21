/*
You are given a string with results of NBA teams (see the data in "Sample Tests") separated by commas e.g:

r = Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,  Los Angeles Clippers 100 Boston Celtics 120.

A team name is composed of one, two or more words built with letters or digits: Atlanta Hawks, Philadelphia 76ers...

Given a string of results and the name of a team (parameter : to_find) your function nba_cup (or nbaCup or ...)  will return as a string

the name of the team followed by : and
the number of matches won by the team
the number of draws
the number of matches lost by the team
the total number of points scored by the team
the total number of points conceded by the team
and finally a kind of marks in our ranking system

a team marks 3 if it is a win
a team marks 1 if it is a draw
a team marks 0 if it is a loss.
The return format is:

"Team Name:W=nb of wins;D=nb of draws;L=nb of losses;Scored=nb;Conceded=nb;Points=nb"
Remarks:
The team name "" returns "".

If a team name can't be found in the given string of results you will return "Team Name:This team didn't play!" (See examples below).

The scores must be integers. If a score is a float number (abc.xyz...) you will return: "Error(float number):the concerned string"

Examples:
nba_cup(r, "Los Angeles Clippers") -> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"

nba_cup(r, "Boston Celtics") -> "Boston Celtics:W=1;D=0;L=0;Scored=120;Conceded=100;Points=3"

nba_cup(r, "") -> ""

nba_cup(r, "Boston Celt") -> "Boston Celt:This team didn't play!"

r0="New York Knicks 101.12 Atlanta Hawks 112"
nba_cup(r0, "Atlanta Hawks") -> "Error(float number):New York Knicks 101.12 Atlanta Hawks 112"
*/

/*
start wins, draws, losses, matches, score, points, conceded all at 0
define array games = resultSheet.split(',')
loop through each game, if string contains team toFind:
add team score to score variable
add opponent score to conceded
increase wins/losses/draws depending on if team had a win/loss/draw
increase matches by 1
increase points by 3/1/0 if team had a win/loss/draw
*/

function nbaCup(resultSheet, toFind) {
	if (!toFind) return '';
	let wins = 0;
	let losses = 0;
	let draws = 0;
	let totalScored = 0;
	let conceded = 0;
	let points = 0;

	const games = resultSheet
		.split(',')
		.filter(game => game.includes(`${toFind} `));
	if (!games.length) return `${toFind}:This team didn't play!`;

	const getScore = str => Number(str.match(/[\.\d]+$/)[0]);
	const getTeam = str => str.replace(/\d+$/, '').trim();

	for (const game of games) {
		const [result1, result2] = game.match(
			/([a-z]+ )?[a-z]+ ([a-z]+|76ers) [\.\d]+/gi
		);
		const [team1, team2] = [getTeam(result1), getTeam(result2)];
		const [score1, score2] = [getScore(result1), getScore(result2)];

		if (score1 % 1 || score2 % 1) return `Error(float number):${game}`;

		if (team1 === toFind) {
			totalScored += score1;
			conceded += score2;
			if (score1 > score2) {
				wins++;
				points += 3;
			}
			if (score1 === score2) {
				draws++;
				points++;
			}
			if (score1 < score2) losses++;
		}

		if (team2 === toFind) {
			totalScored += score2;
			conceded += score1;
			if (score2 > score1) {
				wins++;
				points += 3;
			}
			if (score2 === score1) {
				draws++;
				points++;
			}
			if (score2 < score1) losses++;
		}
	}

	return `${toFind}:W=${wins};D=${draws};L=${losses};Scored=${totalScored};Conceded=${conceded};Points=${points}`;
}

const r1 =
	'Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,' +
	'Los Angeles Lakers 111 Minnesota Timberwolves 112,Phoenix Suns 95 Dallas Mavericks 111,Portland Trail Blazers 112 New Orleans Pelicans 94,' +
	'Sacramento Kings 104 Los Angeles Clippers 111,Houston Rockets 85 Denver Nuggets 105,Memphis Grizzlies 76 Cleveland Cavaliers 106,' +
	'Milwaukee Bucks 97 New York Knicks 122,Oklahoma City Thunder 112 San Antonio Spurs 106,Boston Celtics 112 Philadelphia 76ers 95,' +
	'Brooklyn Nets 100 Chicago Bulls 115,Detroit Pistons 92 Utah Jazz 87,Miami Heat 104 Charlotte Hornets 94,' +
	'Toronto Raptors 106 Indiana Pacers 99,Orlando Magic 87 Washington Wizards 88,Golden State Warriors 111 New Orleans Pelicans 95,' +
	'Atlanta Hawks 94 Detroit Pistons 106,Chicago Bulls 97 Cleveland Cavaliers 95,' +
	'San Antonio Spurs 111 Houston Rockets 86,Chicago Bulls 103 Dallas Mavericks 102,Minnesota Timberwolves 112 Milwaukee Bucks 108,' +
	'New Orleans Pelicans 93 Miami Heat 90,Boston Celtics 81 Philadelphia 76ers 65,Detroit Pistons 115 Atlanta Hawks 87,' +
	'Toronto Raptors 92 Washington Wizards 82,Orlando Magic 86 Memphis Grizzlies 76,Los Angeles Clippers 115 Portland Trail Blazers 109,' +
	'Los Angeles Lakers 97 Golden State Warriors 136,Utah Jazz 98 Denver Nuggets 78,Boston Celtics 99 New York Knicks 85,' +
	'Indiana Pacers 98 Charlotte Hornets 86,Dallas Mavericks 87 Phoenix Suns 99,Atlanta Hawks 81 Memphis Grizzlies 82,' +
	'Miami Heat 110 Washington Wizards 105,Detroit Pistons 94 Charlotte Hornets 99,Orlando Magic 110 New Orleans Pelicans 107,' +
	'Los Angeles Clippers 130 Golden State Warriors 95,Utah Jazz 102 Oklahoma City Thunder 113,San Antonio Spurs 84 Phoenix Suns 104,' +
	'Chicago Bulls 103 Indiana Pacers 94,Milwaukee Bucks 106 Minnesota Timberwolves 88,Los Angeles Lakers 104 Portland Trail Blazers 102,';

console.log(nbaCup(r1, 'Boston Celtics'));
