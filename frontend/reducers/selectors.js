import * as _ from 'lodash';

//locationID

export const selectLocationEvents = (events, locationId) => {
  return _.filter(
    _.orderBy(_.values(events), ['time']), {location_id: parseInt(locationId)}
  );
};
