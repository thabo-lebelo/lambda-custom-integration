exports.handler = async (event) => {
    var name = event.path.slice(1);
    var response = {
        "statusCode": 200,
    };

    if (name == null || name === '') {
        response.body = "Hello 👋, you invoked a Lambda function using an API Gateway 👌🏽";
    } else {
        name =  name[0].toUpperCase() + name.slice(1)
        response.body = "Hello " + name + " 🙂. You invoked a Lambda function using an API Gateway 👌🏽"
    }
    return response;
};