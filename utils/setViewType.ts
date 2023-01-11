const setViewType = (width: number) => {
  if (width < 768) return 'MOBILE';
  else if (width >= 768 && width < 1920) return 'TABLET';
  else return 'DESKTOP';
};

export default setViewType;
