
export const uniqueCountries = (universities = []) => {
  return universities.reduce( (prevState, { country }, index) => {
    if (!prevState.includes(country)) {
      prevState.push(country);
    }
    return prevState;
  },  ['Argentina']);
};

export const generateRandomColor = () => {
  return Math.floor(Math.random()*16777215).toString(16);
}

export const chartDataParser = (universities) => {
  const countries = universities.reduce((prevState, { country }) => (
    {
      ...prevState,
      [country]: (prevState[country] || 0) + 1
    }
  ), {});

  const parsedData = Object.keys(countries).map((country) => (
    {
      name: country,
      value: countries[country],
      fill: "#"+generateRandomColor()
    })
  );

  return parsedData;
}