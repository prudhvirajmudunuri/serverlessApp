
import { helloSvc } from './services/helloSvc';
import TacoGallery from './services/TacoGallery';

const isString = obj => typeof obj === "string" || obj instanceof String;

module.exports.helloLambda = (event, context, callback) => {
  const result = helloSvc({ name: "Serverless" });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: result,
      input: event
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

  callback(null, response);
};


