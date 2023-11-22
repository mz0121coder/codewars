/*
Score a cross country running world championships by team, according to rules by World Athletics:

In all races, teams may enter a maximum of eight athletes, but no more than six shall be allowed to start in each race with four to score.

The team results are decided by the aggregate of places recorded by the scoring athletes of each team. The team with the lowest aggregate of points will be judged the winner.

If a team fails to finish with a complete scoring team, the runners finishing shall be counted as individuals in the race result and be eligible for the individual prize money (senior races only).

In the event of a tie, it shall be resolved in favour of the team whose last scoring member finishes nearer to first place.

Input will be an array of race result objects with three relevant keys per object, competitorName, competitorCountryCode, and resultRank. Here is a hypothetical "dual meet" between Uganda and Kenya to be scored*:

const dualMeet = [
  {
    "competitorName": "Joshua CHEPTEGEI",
    "competitorCountryCode": "UGA",
    "resultRank": 1
  },
  {
    "competitorName": "Jacob KIPLIMO",
    "competitorCountryCode": "UGA",
    "resultRank": 2
  },
  {
    "competitorName": "Geoffrey KAMWOROR",
    "competitorCountryCode": "KEN",
    "resultRank": 3
  },
  {
    "competitorName": "Rhonex KIPRUTO",
    "competitorCountryCode": "KEN",
    "resultRank": 4
  },
  {
    "competitorName": "Thomas AYEKO",
    "competitorCountryCode": "UGA",
    "resultRank": 5
  },
  {
    "competitorName": "Joel AYEKO",
    "competitorCountryCode": "UGA",
    "resultRank": 6
  },
  {
    "competitorName": "Albert CHEMUTAI",
    "competitorCountryCode": "UGA",
    "resultRank": 7
  },
  {
    "competitorName": "Richard YATOR",
    "competitorCountryCode": "KEN",
    "resultRank": 8
  },
  {
    "competitorName": "Rodgers KWEMOI",
    "competitorCountryCode": "KEN",
    "resultRank": 9
  },
  {
    "competitorName": "Maxwell ROTICH",
    "competitorCountryCode": "UGA",
    "resultRank": 10
  },
  {
    "competitorName": "Amos KIRUI",
    "competitorCountryCode": "KEN",
    "resultRank": 11
  },
  {
    "competitorName": "Evans Keitany KIPTUM",
    "competitorCountryCode": "KEN",
    "resultRank": 12
  }
]
In this case, the sum of places for Uganda's top 4 would be 1+2+5+6=14 points, while the sum of places for Kenya's top 4 would be 3+4+8+9=24 points. Like in golf, the lowest score wins, so we would be expected to return Uganda as the winner and Kenya in 2nd place:

const result = scoreWorldXC(dualMeet);
assert.deepEqual(result, [
  {
    "teamCountryCode": "UGA",
    "standingMark": 14
  },
  {
    "teamCountryCode": "KEN",
    "standingMark": 24
  }
]);
The result value should be an array of team objects in order of finish, with each scoring team represented (teams with less than 4 finishers should not be included). Each team object should have a teamCountryCode key with that team's name, and a standingMark key with the team's score.

If there is a tie, the tie should be broken by comparing the places of the tied teams' fourth runners. For example consider the following dual meet:

const dualMeetTie = [
  {
    "competitorName": "Joshua CHEPTEGEI",
    "competitorCountryCode": "UGA",
    "resultRank": 1
  },
  {
    "competitorName": "Geoffrey KAMWOROR",
    "competitorCountryCode": "KEN",
    "resultRank": 2
  },
  {
    "competitorName": "Jacob KIPLIMO",
    "competitorCountryCode": "UGA",
    "resultRank": 3
  },
  {
    "competitorName": "Rhonex KIPRUTO",
    "competitorCountryCode": "KEN",
    "resultRank": 4
  },
  {
    "competitorName": "Richard YATOR",
    "competitorCountryCode": "KEN",
    "resultRank": 5
  },
  {
    "competitorName": "Thomas AYEKO",
    "competitorCountryCode": "UGA",
    "resultRank": 6
  },
  {
    "competitorName": "Rodgers KWEMOI",
    "competitorCountryCode": "KEN",
    "resultRank": 7
  },
  {
    "competitorName": "Joel AYEKO",
    "competitorCountryCode": "UGA",
    "resultRank": 8
  },
  {
    "competitorName": "Albert CHEMUTAI",
    "competitorCountryCode": "UGA",
    "resultRank": 9
  },
  {
    "competitorName": "Maxwell ROTICH",
    "competitorCountryCode": "UGA",
    "resultRank": 10
  },
  {
    "competitorName": "Amos KIRUI",
    "competitorCountryCode": "KEN",
    "resultRank": 11
  },
  {
    "competitorName": "Evans Keitany KIPTUM",
    "competitorCountryCode": "KEN",
    "resultRank": 12
  }
]
In this case Kenya's score is 2+4+5+7=18, but Uganda's score is also 1+3+6+8=18. The tie should be broken by comparing Kenya's 4th runner Rogers Kwemoi (7th) to Uganda's 4th runner Joel Ayeko (8th). Because Kwemoi finished first, Kenya wins the tiebreaker:

const result = scoreWorldXC(dualMeetTie);
assert.deepEqual(result, [
  {
    "teamCountryCode": "KEN",
    "standingMark": 18
  },
  {
    "teamCountryCode": "UGA",
    "standingMark": 18
  }
]);
Note that not all runners will have a truthy resultRank property. Runners that start but don't finish will have a null resultRank, and they won't contribute to team scoring. If a team has less than 4 scorers, they shouldn't be counted in the team scoring.

The input array is guaranteed to contain all runners ordered by finish, and nully-resultRanked runners are guaranteed to be at the end of the input array if present.
*/

/*
obj to track top 4 scores of valid countries
return array of team objects (lowest to highest total)
*/

function scoreWorldXC(results) {
	const races = {};
	const scores = {};
	const scoreSet = new Set();

	results.forEach(item => {
		const country = item.competitorCountryCode;
		const result = item.resultRank;
		if (typeof result !== 'number') return;

		if (!(country in races)) {
			races[country] = [result];
		} else {
			if (races[country].length < 4) {
				races[country].push(result);
			}
		}
		if (races[country].length === 4) {
			scores[country] = races[country].reduce((acc, curr) => acc + curr, 0);
			scoreSet.add(scores[country]);
		}
	});

	const result = [];
	scoreSet.forEach(score => {
		const sameScorers = Object.entries(scores).filter(item => {
			const [country, total] = item;
			return total === score && races[country].length === 4;
		});
		const formattedScore = sameScorers.map(el => ({
			teamCountryCode: el[0],
			standingMark: el[1],
		}));
		result.push(...formattedScore);
	});

	return [...result.sort((a, b) => a.standingMark - b.standingMark)];
}

const dualMeet = [
	{
		competitorName: 'Joshua CHEPTEGEI',
		competitorCountryCode: 'UGA',
		resultRank: 1,
	},
	{
		competitorName: 'Jacob KIPLIMO',
		competitorCountryCode: 'UGA',
		resultRank: 2,
	},
	{
		competitorName: 'Geoffrey KAMWOROR',
		competitorCountryCode: 'KEN',
		resultRank: 3,
	},
	{
		competitorName: 'Rhonex KIPRUTO',
		competitorCountryCode: 'KEN',
		resultRank: 4,
	},
	{
		competitorName: 'Thomas AYEKO',
		competitorCountryCode: 'UGA',
		resultRank: 5,
	},
	{
		competitorName: 'Joel AYEKO',
		competitorCountryCode: 'UGA',
		resultRank: 6,
	},
	{
		competitorName: 'Albert CHEMUTAI',
		competitorCountryCode: 'UGA',
		resultRank: 7,
	},
	{
		competitorName: 'Richard YATOR',
		competitorCountryCode: 'KEN',
		resultRank: 8,
	},
	{
		competitorName: 'Rodgers KWEMOI',
		competitorCountryCode: 'KEN',
		resultRank: 9,
	},
	{
		competitorName: 'Maxwell ROTICH',
		competitorCountryCode: 'UGA',
		resultRank: 10,
	},
	{
		competitorName: 'Amos KIRUI',
		competitorCountryCode: 'KEN',
		resultRank: 11,
	},
	{
		competitorName: 'Evans Keitany KIPTUM',
		competitorCountryCode: 'KEN',
		resultRank: 12,
	},
];

console.log(scoreWorldXC(dualMeet));
