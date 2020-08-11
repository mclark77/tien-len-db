const fs = require('fs');
const json = fs.readFileSync('users.json', 'utf8');
const users = JSON.parse(json);

const leaderboard = [];

function compare(a, b) {
    if (a.wins > b.wins) {
        return -1;
    }

    if (a.wins < b.wins) {
        return 1;
    }

    return 0;
}

for (const [id, user] of Object.entries(users)) {
    leaderboard.push({ id, ...user });
}

leaderboard.sort(compare);

console.log(JSON.stringify(leaderboard, null, 4))
