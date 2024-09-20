// const { nanoid } = require("nanoid");
// const URL = require("../Models/url");

// async function handleGenerateNewShortUrl(req, res) {
//   const shortId = nanoid(8);
//   const body = req.body;
//   if (!body.url) return res.status(400).json({ error: "URL is required" });
//   await URL.create({
//     shortId: shortId,
//     redirectURL: body.url,
//     visitHistory: [],
//   });
//   return res.json({ id: shortId });
// }

// async function handleFindById(req, res) {
//   const id = req.params.id;
//   const entry = await URL.findById(id);
//   return res.json({entry})
// }

// async function handlePutVisitHistory(req, res) {
//   const shortid = req.params.shortId;
//   const entry = await URL.findOneAndUpdate(
//     {
//       shortid,
//     },
//     {
//       $push: {
//         visitHistory: {
//           timestamp: Date.now(),
//         },
//       },
//     }
//   );
//   res.redirect(entry.redirectURL);
// }

// module.exports = {
//   handleGenerateNewShortUrl,
//   handleFindById,
//   handlePutVisitHistory
// };

const { nanoid } = require("nanoid");
const URL = require("../Models/url");

async function handleGenerateNewShortUrl(req, res) {
  const shortId = nanoid(8);
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const newUrl = await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    });
    return res.json({ id: shortId });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create short URL" });
  }
}

// async function handleFindById(req, res) {
//   const id = req.params.id;

//   try {
//     const entry = await URL.findById(id);
//     if (!entry) {
//       return res.status(404).json({ error: "Short URL not found" });
//     }
//     return res.json({ entry });
//   } catch (error) {
//     return res.status(500).json({ error: "Error fetching short URL" });
//   }
// }

// async function handlePutVisitHistory(req, res) {
//   const shortId = req.params.shortId;
//    const entry = await URL.findOneAndUpdate(
//       { shortId },{
//         $push:{
//             visitHistory: {
//               timestamp: Date.now(),
//             }
//         }
//       },{ new: true } 
//     )
//     res.redirect(entry.redirectURL)
// }

async function handleAnalysisHistory(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOne({shortId});
    if(!entry){
        return res.status(404).json({error: "Short URL not found"});
    }
    const history = entry.visitHistory.map((visit)=>({timestamp: visit}));
    return res.json({analysis: history});
}

module.exports = {
  handleGenerateNewShortUrl,
  handleAnalysisHistory
//   handlePutVisitHistory,
};
