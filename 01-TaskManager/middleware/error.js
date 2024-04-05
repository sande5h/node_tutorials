const path = require("path");
const fs = require("fs");
const { CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  let errorMessage; // Declare errorMessage variable here
  let errorStatusCode; // Declare errorStatusCode variable here
  if (err instanceof CustomAPIError) {
     errorStatusCode = err.statusCode || 500;
     errorMessage = err.message || "Internal Server Error";
  } else {
     errorMessage = err.message || "Internal Server Error";
     errorStatusCode = 500;
  }

  const filePath = path.join(__dirname, "error500.html");

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.log("error html not found");
    return res.status(500).send("Internal Server Error");
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading the content of html error");
      return res.status(500).send("Internal Server Error");
    }

    // Replace placeholders in the HTML file with the error message
    const htmlContent = data.replace("{{errorMessage}}", errorMessage);

    // Send the HTML content as the response
    res.status(errorStatusCode).send(htmlContent);
  });
};

module.exports = errorHandlerMiddleware;
