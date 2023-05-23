const getUniquePayments = (pays: Array<string>) => {
  const uniquePays = [];

  for (let i = 0; i < pays.length; i++) {
    if (pays[i].includes('_')) uniquePays.push(pays[i].substring(pays[i].indexOf('_'), -1));
    else uniquePays.push(pays[i]);
  }
  return Array.from(new Set(uniquePays));
};

export default getUniquePayments;
