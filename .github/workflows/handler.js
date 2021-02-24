function handler(inputs) {
    console.log("Handler running ...")
    console.log("Input: ", JSON.parse(inputs));
}

handler(process.argv[2]);