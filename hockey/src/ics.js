const ics = require('ics');

const createIcs = ({ events }) => {
  console.log('Creating ics file with the following events:', events);

  const { error, value } = ics.createEvents(events);

  if (error) {
    console.error(error);
    return;
  }

  console.log(value);

  return value;
};

module.exports = {
  createIcs,
};
