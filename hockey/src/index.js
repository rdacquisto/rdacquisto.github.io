const { writeFileSync } = require('fs');
const { createIcs } = require('./ics');
const { scrapSchedules } = require('./scraper');

const CLUSTER_PUCKS_SCHEDULE_URL = [
  'https://snokinghockeyleague.com/api/team/subSchedule/1096/3278?v=12670',
];

const run = async () => {
  const events = await scrapSchedules({ urls: CLUSTER_PUCKS_SCHEDULE_URL });

  const icsContents = createIcs({ events });

  writeFileSync(`${__dirname}/hockey.ics`, icsContents);
};

run();
