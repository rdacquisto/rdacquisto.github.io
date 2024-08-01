const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const rinks = {
  Renton: '12620 164th Ave SE, Renton, WA 98059',
  'Snoqualmie A': '35323 SE Douglas St, Snoqualmie, WA 98065',
  'Snoqualmie B': '35323 SE Douglas St, Snoqualmie, WA 98065',
};

const getTitle = ({ game }) => {
  if (game.teamAwayName === 'Cluster Pucks') {
    return `${game.teamAwayName} at ${game.teamHomeName}`;
  }

  return `${game.teamHomeName} vs ${game.teamAwayName}`;
};

const getDescription = ({ game }) => {
  const color = game.teamHomeName === 'Cluster Pucks' ? 'White' : 'Dark';

  return `Jersey: ${color}\n${game.teamAwayName} at ${game.teamHomeName}`;
};

const scrapSchedules = async ({ urls }) => {
  const seasons = await Promise.all(
    await urls.map(async (url) => {
      const response = await axios.get(url);
      const { games } = response.data;
      console.log('games', games);

      return games.map((game) => {
        const startDate = new Date(game.dateTime);
        return {
          title: getTitle({ game }),
          description: getDescription({ game }),
          location: rinks[game.rinkName],
          start: [
            startDate.getFullYear(),
            startDate.getMonth() + 1,
            startDate.getDate(),
            startDate.getHours(),
            startDate.getMinutes(),
          ],
          startOutputType: 'local',
          duration: { hours: 1, minutes: 10 },
          calName: 'Cluster Pucks',
          url: `https://snokinghockeyleague.com/#/home/team/${game.seasonId}/3278`,
        };
      });
    })
  );

  return seasons.flat();
};

module.exports = { scrapSchedules };
