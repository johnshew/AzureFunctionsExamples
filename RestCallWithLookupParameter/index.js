module.exports = function(context, req, inputBlob) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=' + req.originalUrl + 'inputBlob=' +  inputBlob); 
    if (inputBlob && inputBlob.name) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + inputBlob.name
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body and also pass in a userid for the storage location"
        };
    }
    context.done();
};