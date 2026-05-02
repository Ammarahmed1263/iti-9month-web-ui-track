export const formatVotes = (votes) => {
  if (Math.abs(votes) >= 1000000) {
    return (votes / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
  }
  if (Math.abs(votes) >= 1000) {
    return (votes / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return votes.toString();
};
