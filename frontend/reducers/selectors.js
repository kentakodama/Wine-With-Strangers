import * as _ from 'lodash';

//lodash methods, location id in params is a string not a num be careful!

export const selectLocationEvents = (events, locationId) => {
  return _.filter(
    _.orderBy(_.values(events), ['time']), {location_id: parseInt(locationId)}
  );
};
