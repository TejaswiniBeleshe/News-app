// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch data from Supabase
export async function fetchDataFromSupabase(category, tableName) {
  // Your Supabase query or operation here
  console.log(category);
  const { data } = await supabase
    .from(tableName)
    .select(category)
    .not(category, "is", null);

  const resultData = data.filter((ele) => ele[category]);
  console.log(resultData);
  // Return the result
  // return { data, error };
  return resultData;
}

// Function to perform another Supabase operation
export async function updateVisitors() {
  // Your Supabase operation here
  try {
    // Fetch current count
    const { data, error } = await supabase.from("Visitors").select("news_app");

    if (error) {
      console.error("Error fetching visitor count:", error.message);
      return;
    }

    const currentCount = data[0]?.news_app || 0;

    // Increment count
    const newCount = currentCount + 1;

    // Update count in the database
    const { error: updateError } = await supabase
      .from("Visitors")
      .update({ news_app: newCount })
      .eq("news_app", currentCount);

    if (updateError) {
      console.error("Error updating visitor count:", updateError.message);
      return;
    }

    console.log(`Visitor count: ${newCount}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
  // Example: const { data, error } = await supabase.from('another_table').select('*');
  // Return the result
  // return { data, error };
}
