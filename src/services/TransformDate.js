/**
 * Date to string formatting.
 * @param {string} dateToString
 */
export const formatDate = (dateToString) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = new Date(dateToString);
  return date.toLocaleString("en-GB", { timeZone });
};
