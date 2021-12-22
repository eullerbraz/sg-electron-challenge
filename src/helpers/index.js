const getCityTime = (timezoneInSeconds) => {
  const BRAZIL_TIMEZONE_IN_MS = -60 * 1000 * 60 * 3;
  const now = Date.now();

  const dateUTC = now + ((timezoneInSeconds * 1000) - BRAZIL_TIMEZONE_IN_MS);
  const date = new Date(dateUTC);

  return `${date.getHours()}:${date.getMinutes()}`;
};

module.exports =  { getCityTime };
