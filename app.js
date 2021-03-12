const e = require("express");
const app = e();


app.get('/', (req, res) => {
  res.end('<h1>hello wörld</h1>');
});

app.listen(3000);