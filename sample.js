var express = require('express');
var app = express();

app.listen(3000,function(err){
  if(err)
  console.log(err);
  console.log('server running at port number 3000');
});
  var sendinblue = require('sendinblue-api');

  var parameters = { "apiKey": "QhKsBvVtU50JmrPY", "timeout": 5000 };	//Optional parameter: Timeout in MS
  var sendinObj = new sendinblue(parameters);

  var input = {};
  sendinObj.get_account(input, function(err, response){
       console.log(response);
  });
//
javascript

/*  var vals = Object.keys(cb).map(function(key) {
                    return cb[0];
                  });
        res.send(vals);
       res.send(Object.keys(cb).map(k => cb["code"]));*/
      /* var keys = Object.keys(cb);var val=[];
       for (var i = 0; i < keys.length; i++) {
            var val = cb[keys[i]];
          }*/
          //res.send(val);
          //res.send(cb[Object.keys(cb)[1]]);
        /*  var result = (cb[Object.keys(cb)[0]]==='success')?'OK':'NOT OK';
          res.send(result);
        }*/
