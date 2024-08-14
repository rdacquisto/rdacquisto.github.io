const { writeFileSync } = require('fs');
const { createIcs } = require('./ics');
const { scrapSchedules } = require('./scraper');

const CLUSETER_PUCKS_SEASONS = [
  {
    season: '2024 - Summer',
    seasonId: '1096',
    teamId: '3278',
    divisionId: '359',
  },
  {
    season: '2024 SKAHL Summer Playoffs',
    seasonId: '1099',
    teamId: '3278',
    divisionId: '374',
  },
];

const run = async () => {
  const events = await scrapSchedules({
    seasons: CLUSETER_PUCKS_SEASONS,
  });

  const icsContents = createIcs({ events });

  writeFileSync(`${__dirname}/hockey.ics`, icsContents);
};

run();
