// const NewsAPI = require('newsapi');
import supabase from "./client.js";
import NewsAPI from "newsapi";
const apiKey = "fffd3fd22b2b48e99e81574252310b67";
const newsapi = new NewsAPI(apiKey);
import cron from "node-cron";

// console.log(newsapi, "object");
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
const newsAPIFun = async (cateGory, country) => {
  newsapi.v2
    .topHeadlines({
      // sources: 'bbc-news,the-verge',
      // q: 'bitcoin',
      category: cateGory,
      // language: 'en',
      country: country,
      page: 1,
      pageSize: 100,
    })
    .then((response) => {
      // console.log(response);
      console.log(cateGory);
      console.log(country);
      /*
        {
          status: "ok",
          articles: [...]
        }
      */
      insertData(response, cateGory, country);
    });
  // newsapi.v2
  //   .everything({
  //     q: "bitcoin",
  //     sources: "bbc-news,the-verge",
  //     domains: "bbc.co.uk, techcrunch.com",
  //     // from: '2017-12-01',
  //     // to: '2017-12-12',
  //     language: "en",
  //     sortBy: "relevancy",
  //     page: 1,
  //   })
  //   .then((response) => {
  //     // console.log(response);
  //     insertData(response, cateGory, country);
  //   });
};

// Define the table name
const tableNameArr = [
  "India_duplicate",
  "France_duplicate",
  "China_duplicate",
  "USA_duplicate",
];
// Call the deleteFirstRow function to delete the first row
await deleteFirstRow();

console.log("Starting........");
const Category = [
  "technology",
  "health",
  "science",
  "business",
  "entertainment",
  "general",
  "sports",
];
const countries = ["in", "us", "ch", "fr"]; //"us", "ch", "fr"

Category.forEach(function (cateGory, ind) {
  countries.forEach(function (country, index) {
    newsAPIFun(cateGory, country);
  });
});

// const Category = [
//   "technology",
//   "health",
//   "science",
//   "business",
//   "entertainment",
//   "general",
//   "sports",
// ];
// const countries = ["in", "us", "ch", "fr"]; //"us", "ch", "fr"

// Category.forEach(function (cateGory, ind) {
//   countries.forEach(function (country, index) {
//     newsAPIFun(cateGory, country);
//   });
// });

// To query /v2/everything
// You must include at least one q, source, or domain
// newsapi.v2
//   .everything({
//     q: "bitcoin",
//     sources: "bbc-news,the-verge",
//     domains: "bbc.co.uk, techcrunch.com",
//     // from: '2017-12-01',
//     // to: '2017-12-12',
//     language: "en",
//     sortBy: "relevancy",
//     page: 1,
//   })
//   .then((response) => {
//     console.log(response);

//   });
// To query sources
// All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });

async function deleteFirstRow() {
  try {
    // Perform the delete operation with a limit of 1 to delete only the first row
    tableNameArr.forEach(async (tableName) => {
      const { data, error } = await supabase
        .from(tableName)
        .delete()
        .limit(7)
        .order("id");

      if (error) {
        console.error("Error deleting first row:", error.message);
      } else {
        console.log("First row deleted successfully:", data);
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const switchTableFun = async (tableName, response, cateGory) => {
  switch (cateGory) {
    case "general":
      const general = response;
      var { data: example, error } = await supabase
        .from(tableName)
        .insert({ general: response.articles })
        .select();

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Inserted general");
      }
      break;
    case "sports":
      var { data: example, error } = await supabase
        .from(tableName)
        .insert({ sports: response.articles })
        .select();

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Inserted data: sports");
      }
      break;
    case "technology":
      var { data: example, error } = await supabase
        .from(tableName)
        .insert({ technology: response.articles })
        .select();

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Inserted data:technology");
      }
      break;
    case "science":
      var { data: example, error } = await supabase
        .from(tableName)
        .insert({ science: response.articles })
        .select();

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Inserted data:science");
      }
      break;
    case "entertainment":
      var { data: example, error } = await supabase
        .from(tableName)
        .insert({ entertainment: response.articles })
        .select();

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Inserted data:entertainment");
      }
      break;
    case "business":
      var { data: example, error } = await supabase
        .from(tableName)
        .insert({ business: response.articles })
        .select();

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Inserted data:business");
      }
      break;
    case "health":
      var { data: example, error } = await supabase
        .from(tableName)
        .insert({ health: response.articles })
        .select();

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Inserted data:health");
      }
      break;
    default:
      console.log(`Sorry, we are out of ${cateGory}.`);
  }
};

const insertData = async (response, cateGory, country) => {
  console.log("insert");
  const responseData = response;
  // console.log(responseData)
  try {
    if (country === "in") {
      const tableName = "India_duplicate";
      switchTableFun(tableName, response, cateGory);
    }
    if (country === "us") {
      const tableName = "USA_duplicate";
      switchTableFun(tableName, response, cateGory);
    }
    if (country === "ch") {
      const tableName = "China_duplicate";
      switchTableFun(tableName, response, cateGory);
    }
    if (country === "fr") {
      const tableName = "France_duplicate";
      switchTableFun(tableName, response, cateGory);
    }
  } catch (error) {
    console.error("Error in insertData:", error.message);
  }
};
