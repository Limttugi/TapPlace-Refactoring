const useMerchant = () => {
  const getUniquePayment = (pays: Array<string>) => {
    for (let i = 0; i < pays.length; i++) {
      if (pays[i].includes('_')) pays[i] = pays[i].substring(pays[i].indexOf('_'), -1);
    }
    return Array.from(new Set(pays));
  };

  return { getUniquePayment };
};

export default useMerchant;
