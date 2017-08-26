var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sendinblue_emailSchema =  new Schema({
  mail_to:String,
  mail_from:[String,String],
  mail_subject:String,
  mail_message:String,
  callback:Object,
  created:{type:Date,default:Date.now}
});

module.exports = mongoose.model("sendinblue_email",sendinblue_emailSchema);
