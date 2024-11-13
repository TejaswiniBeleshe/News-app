import React, { useEffect, useContext } from "react";
import NavBarContext from "../context/ShowNavBarContext";

export default function About() {
  const toggleNavBar = useContext(NavBarContext);

  useEffect(() => {
    toggleNavBar.update(false);
  }, []);
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            Hi, I'm [Your Name], a passionate and creative web developer based
            in [Your Location]. I have a strong foundation in front-end and
            back-end technologies, and I enjoy turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            My journey in web development started [mention a brief background or
            how you got into web development]. I specialize in [mention any
            specific technologies or frameworks you specialize in]. In my free
            time, I love [mention any hobbies or interests related to web
            development or technology].
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Feel free to explore my portfolio and projects to get a sense of my
            work. If you have a project or idea you'd like to discuss, please
            don't hesitate to{" "}
            <a href="#contact" className="text-blue-500 hover:underline">
              contact me
            </a>
            . I'm always open to new challenges and collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
