import { createClient } from "@supabase/supabase-js";
import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./scratch");

const supabaseUrl = "https://tctywptybskokqycvohr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg";
const supabase = createClient(supabaseUrl, supabaseKey, {
  persistSession: true, // Enable session persistence
  localStorage: localStorage, // Specify storage option (in this case, using browser localStorage)
});

//3aTpz-#Ky4M7KDf
export default supabase;
