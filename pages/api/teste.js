
import { ObjectId } from "mongodb";
import { find, insertOnlyOne, removeOnlyOne } from "../../server/helpers/mongo.js"

async function oi(req, res) {
  try {

    let query = {}
    let result = await find("web", "services", query);

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({"status": "deu merda"});
  }
}


export default oi;