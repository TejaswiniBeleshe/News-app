import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-2 fixed min-w-max w-full bottom-0">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Suddi-Samachar</p>
        </div>
      </footer>
    </>
  );
}
