import { createClient } from "@supabase/supabase-js";
import CountryContext from "../context/CountryContext";
import { useContext } from "react";

const supabase = createClient(
  "https://tctywptybskokqycvohr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
);

export default async function callForData({ category, countryData }) {
  let tableName;

  if (countryData) {
    if (countryData.state.toLowerCase() === "india") {
      tableName = "India_duplicate";
    } else if (countryData.state.toLowerCase() === "usa") {
      tableName = "USA_duplicate";
    } else if (countryData.state.toLowerCase() === "france") {
      tableName = "France_duplicate";
    } else if (countryData.state.toLowerCase() === "china") {
      tableName = "China_duplicate";
    }
    const finalArray = [];

    if (category.toLowerCase() === "general") {
      const { data } = await supabase
        .from(tableName)
        .select("general")
        .not("general", "is", null);

      data.forEach((ele) => {
        if (ele.general) {
          finalArray.push(ele.general);
        }
      });
      countryData.setData(finalArray);
      return;
    }
    if (category.toLowerCase() === "science") {
      const { data } = await supabase
        .from(tableName)
        .select("science")
        .not("science", "is", null);

      data.forEach((ele) => {
        if (ele.science) {
          finalArray.push(ele.science);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "sports") {
      const { data } = await supabase
        .from(tableName)
        .select("sports")
        .not("sports", "is", null);

      data.forEach((ele) => {
        if (ele.sports) {
          finalArray.push(ele.sports);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "entertainment") {
      const { data } = await supabase
        .from(tableName)
        .select("entertainment")
        .not("entertainment", "is", null);

      data.forEach((ele) => {
        if (ele.entertainment) {
          finalArray.push(ele.entertainment);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "business") {
      const { data } = await supabase
        .from(tableName)
        .select("business")
        .not("business", "is", null);

      data.forEach((ele) => {
        if (ele.business) {
          finalArray.push(ele.business);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "health") {
      const { data } = await supabase
        .from(tableName)
        .select("health")
        .not("health", "is", null);

      data.forEach((ele) => {
        if (ele.health) {
          finalArray.push(ele.health);
        }
      });
      countryData.setData(finalArray);

      return;
    }
    if (category.toLowerCase() === "technology") {
      const { data } = await supabase
        .from(tableName)
        .select("technology")
        .not("technology", "is", null);

      data.forEach((ele) => {
        if (ele.technology) {
          finalArray.push(ele.technology);
        }
      });
      countryData.setData(finalArray);

      return;
    } else {
      const { data } = await supabase
        .from("NewsData")
        .select("dataUS")
        .not("dataUS", "is", null);

      data.forEach((ele) => {
        if (ele.dataUS) {
          finalArray.push(ele.dataUS);
        }
      });
      countryData.setData(finalArray);

      return;
    }
  }
}
