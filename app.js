const e = require("express");
const app = e();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.end('<h1>hello wörld</h1>');
});

app.listen(port);