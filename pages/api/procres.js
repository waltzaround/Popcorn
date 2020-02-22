import language from "@google-cloud/language";
import mongo from "mongodb";

export default async (req, res) => {
  const {
    query: { pid }
  } = req;

  console.log("Body");
  console.log(req.body);

  let json = req.body;

  console.log("json message");
  console.log(json.message);

  // Instantiates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze
  const text = json.message;

  const document = {
    content: text,
    type: "PLAIN_TEXT"
  };

  // Detects the sentiment of the text
  const [annotateResult] = await client.annotateText({
    document: document,
    features: {
      extractSyntax: false,
      extractEntities: true,
      extractDocumentSentiment: true,
      extractEntitySentiment: true,
      classifyText: false
    }
  });

  var ret = {
    dept: json.dept,
    branch: json.branch,
    result: annotateResult
  };

  let retString = JSON.stringify(ret, null, 2);
  console.log("Server replying with: ");
  console.log(retString);

  /*
   console.log(`Text: ${text}`);
   console.log(`Sentiment score: ${sentiment.score}`);
   console.log(`Sentiment magnitude: ${sentiment.magnitude}`);*/

  res.end(retString);

  const MongoClient = mongo.MongoClient;

  const url = "mongodb://localhost:27017";

  // Database Name
  const dbName = "popcorn";

  // Create a new MongoClient
  const mC = new MongoClient(url);

  // Use connect method to connect to the Server
  mC.connect(function(err) {
    console.log("Connected successfully to server");

    const db = mC.db(dbName);

    db.collection("results").insertOne(ret, function(err, r) {});

    mC.close();
  });
};
