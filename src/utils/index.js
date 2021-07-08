export const DARK_SIDE_NAME = "Darth Vader";
export const LIGHT_SIDE_NAME = "Luke Skywalker";

export const fetchStrengthSide = async (
  history,
  force = undefined,
  setLoading
) => {
  try {
    setLoading(true);
    const response = await Promise.race([
      fetch("https://swapi.dev/api/people/1"),
      fetch("https://swapi.dev/api/people/4"),
    ]);

    const result = await response.json();

    setLoading(false);

    if (result.name === DARK_SIDE_NAME && force !== "dark") {
      return history.push("/side/dark");
    } else if (result.name === LIGHT_SIDE_NAME && force !== "light") {
      return history.push("/side/light");
    }
  } catch (error) {
    setLoading(false);
    alert(error);
  }
};
