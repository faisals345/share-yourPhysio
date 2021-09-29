const express = require('express')
const app = express()
const cors = require('cors');



var axios = require('axios');
app.use(cors());
app.use(express.json()) 

app.use(express.static(path.resolve(__dirname, '../client/build')));

const PORT = process.env.PORT || 5000;



app.post('/api', (req,res)=> { //post method

  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${req.body.origin}&destinations=${req.body.destination}&key=AIzaSyCwHEAZV4QYnEiqi22RJwvfO9KcHa1arZI`,
    headers: { }
  };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
})


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT,()=>console.log("server is up"));