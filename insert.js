var AWS = require('aws-sdk'); 

AWS.config = new AWS.Config();
// AWS.config.accessKeyId = "AKIA5WAEJ2C3T63FVBEH";
// AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";

//Insert items

var ddb = new AWS.DynamoDB();

var params = {
    TableName: 'EMPLOYEE',
    Item: {
      'EMP_ID' : {S: '003'},
      'EMP_NAME' : {S: 'Robin'},
      'EMP_AGE' : {N: '32'}
    }
  };
  
  // Call DynamoDB to add the item to the table
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });