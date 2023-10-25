const express = require('express');
const app = express();
const port = 3000;

let flag = 'UDCTF{l1t3ra11y_g3t_r3cked!}';

app.use(express.static('public'));

app.get('/ctf', (req, res) => {
  const userInput = req.query.input;
  let pageContent = `
    <html>
      <head>
        <title>UD CTF Challenge</title>
      </head>
      <body>
        <h1>UD CTF Challenge</h1>
        <p>Submit your payload:</p>
        <form>
          <input type="text" name="input" value="${userInput || ''}">
          <input type="submit" value="Submit">
        </form>
        <div>
          <p>Your input: ${userInput || ''}</p>
        </div>
      </body>
    </html>
  `;

  if (userInput === flag) {
    pageContent += `
      <script>
        alert("Congratulations! You've captured the flag: ${flag}");
      </script>
    `;
  }

  res.send(pageContent);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
