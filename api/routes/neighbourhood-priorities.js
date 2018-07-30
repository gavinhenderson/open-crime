const request = require('request-promise');

module.exports = async data => {
  const url = `https://data.police.uk/api/${data.force}/${
    data.neighbourhood
  }/priorities`;
  const result = await request.get({ url, json: true });
  result.forEach(current => {
    delete Object.assign(current, { ['issue_date']: current['issue-date'] })[
      'issue-date'
    ];
    delete Object.assign(current, { ['action_date']: current['action-date'] })[
      'action-date'
    ];
  });
  return result;
};
