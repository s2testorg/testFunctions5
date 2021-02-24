---
testspace:
before:
  name: aws:us-east-1:testspace-test-man-auto
  description: before - simple input
  input: 
    a: this
    b: that
---

# aws.fixture
The fixtured used is maintained on the [AWS console](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/testspace-test-man-auto?tab=configuration).

```
exports.handler = async (event, context) => {
    
    //var input = event.client_payload;
    var input = event;
    
    console.log("Handler running ..");
    console.log("Input:", input);
    
    console.log("JSON.Input:", JSON.stringify(input));
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from testspace-test-man-auto!'),
        log: context.logStreamName,
    };
    return response;
};
```

## One
* one
* two

## Two
* one
* two