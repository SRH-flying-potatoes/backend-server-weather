const { MongoClient } = require("mongodb");
const { __mongoDB__, __mongoAirportDB__ } = require("../constants");


async function getDataFromCollection(dbName, collectionName, query = {}) {
  const clientConn = new MongoClient(__mongoDB__);
  // let collect = undefined;
  try {
    const db = clientConn.db(dbName);
    const collect = db.collection(collectionName);
    // const query = { City: "Madang" };
    const airportCursor = await collect.find(query);
    let data = [];
    for await (const airportDoc of airportCursor) {
      data.push(airportDoc);
    }
    return data;
  } finally {
    await clientConn.close();
    console.log("Connection closed");
  }
}

exports.getDataFromCollection = getDataFromCollection;
