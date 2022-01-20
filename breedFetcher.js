const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        console.log("Error :", error);
        return;
      } else {
        const data = JSON.parse(body);

        if (data[0] === undefined) {
          console.log("The breed is not found");
          return;
        } else {
          console.log(
            "Name:",
            data[0]["name"],
            "\n",
            "Description:",
            data[0]["description"]
          );
        }
      }
      callback();
    }
  );
};

module.exports = { fetchBreedDescription };
