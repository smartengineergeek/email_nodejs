//api routes 24 august
require('./model');
module.exports = function(app,sendinblue,mongoose){
  var parameters = {"apiKey":"QhKsBvVtU50JmrPY","timeout": 5000};	//Optional parameter: Timeout in MS
  var sendinObj = new sendinblue(parameters);
  var sendinblueModel = mongoose.model('sendinblue_email');

  app.post('/mailapi',function(req,res){
    data = req.body;
    sendinObj.send_email(data,function(err,cb){
    if(err)
         console.log(err);
    else if(cb[Object.keys(cb)[0]]==='success'){
        var savedata = new sendinblueModel({mail_to:Object.keys(req.body.to),mail_from:req.body.from,mail_subject:req.body.subject,mail_message:req.body.html,callback:cb});
        savedata.save(function(err){
                      if(err)  throw err;
                      //  res.send('Great my data is saved in mongoose.');//cannot set header after they are send
                        console.log('Great my data is saved in mongoose.');
                      });
      }
      res.send(cb);
    });
  });//  mailapi

}
