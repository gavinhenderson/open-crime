const toTitleCase = slugTitle => {
  const titleArray = slugTitle.split('-');
  const upperCasedArray = titleArray.map(
    current => current[0].toUpperCase() + current.slice(1)
  );
  return upperCasedArray.join(' ');
};

export default toTitleCase;
