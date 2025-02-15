
import BookmarkManagerImage from "../assets/Bookmark Manager.png/";



function Projects() {
  return (
    <main id="projects"
    className="max-w-md mx-auto flex md:flex-col ">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-4 font-serif">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 mb-4 font-serif">
            For instance:
          </p>

          <ul className="list-disc ml-8 mb-4">
            <li>
              <a
                href="https://bookmark-s.vercel.app/"
                className="text-blue-500 hover:text-blue-700"
              >
                → Bookmark App
              </a>
            </li>
            <li>
              <a
                href="link-to-calculator-project"
                className="text-blue-500 hover:text-blue-700"
              >
                → Calculator App
              </a>
            </li>
          </ul>

          <p className="text-lg text-gray-600 mb-4 font-serif">
            Discover this awesome Bookmark app!
          </p>

          {/* Display the image here */}
          <div className="mb-4">
            <img
              src={BookmarkManagerImage}
              alt="Screenshot of the Bookmark Manager app interface"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>

          <a
            href="https://bookmark-s.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md 
            text-sm block text-center"
          >
            Visit Bookmark App
          </a>
        </div>
      </div>
    </main>
  );
}

export default Projects;
