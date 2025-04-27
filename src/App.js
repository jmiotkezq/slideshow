// Import necessary React and CSS files
import React, { useState } from "react";
import './App.css';  // Import custom CSS for styling

function App() {
  // Array of image file paths. Using process.env.PUBLIC_URL to reference images in the public folder
  const images = [
    process.env.PUBLIC_URL + "/images/image1.jpg",  // Path to the first image
    process.env.PUBLIC_URL + "/images/image2.jpg",  // Path to the second image
    process.env.PUBLIC_URL + "/images/image3.jpg"   // Path to the third image
  ];

  // State to track the current image being displayed
  const [currentImage, setCurrentImage] = useState(0);

  // Function to show the next image in the slideshow
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);  // Loop back to the first image after the last one
  };

  // Function to show the previous image in the slideshow
  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);  // Loop back to the last image after the first one
  };

  return (
    <div className="App">
      {/* Heading for the slideshow */}
      <h1>Image Slideshow</h1>
      <div className="slideshow">
        {/* Button to navigate to the previous image */}
        <button onClick={prevImage}>Previous</button>
        
        {/* Image element that displays the current image in the slideshow */}
        <img src={images[currentImage]} alt="Slideshow" />
        
        {/* Button to navigate to the next image */}
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

// Export the App component to be used elsewhere
export default App;


/*

My final project includes:
- App.js for my index.html file
- App.css for my style.css file
- package.json for my script.js file

Sources:
APA Citation for ChatGPT Transcript:
OpenAI. (2025, April 26). ChatGPT conversation about React app structure and file organization. Retrieved from https://chat.openai.com/

I used React & Github for the first time, with ChatGPT for AI and saved it into a transcript called AI_Transcript.doc saved in zip

My slideshow website can be viewed at https://jmiotkezq.github.io/slideshow/

The photos are public domain I have found on my tumblr throughout the years

Project Reflection:

1. Challenges Encountered:
   One of the main challenges I faced was ensuring that all the images displayed correctly on the website after deploying it to GitHub Pages. Initially, some images didn't show up due to incorrect file paths or not being properly included in the repository. To overcome this, I made sure all the image files were inside the "public" folder in my React app, and I verified that their paths were correctly referenced in the code. Additionally, configuring the deployment with GitHub Pages took some trial and error, but by carefully following the steps for deploying a React app with the "gh-pages" package, I was able to successfully push my build to GitHub and make the website live.

2. Ethical Considerations of Copying/Pasting Code:
   It is not inherently unethical to copy and paste code from online sources, as long as you understand what the code does and give credit to the original author when necessary. Using code snippets from resources like Stack Overflow, GitHub, or documentation is common practice, but it's important to ensure that the code is used in the correct context and that it aligns with the goals of your project. Blindly copying code without understanding it can hinder learning and potentially introduce issues in your project. Ethical concerns arise if you directly copy someone's entire work and present it as your own without proper attribution.

3. Purpose of Learning Programming Despite AI Tools:
   While AI tools like code generators can write code for you, learning a programming language provides the foundational knowledge necessary to understand how the code works and how to solve problems efficiently. AI tools are just assistants; they do not replace the need for critical thinking, debugging, and problem-solving skills. By learning to code, you gain the ability to modify and adapt AI-generated code to fit your specific needs, troubleshoot errors, and build more complex and tailored solutions. Additionally, programming knowledge fosters creativity and allows you to better understand and implement algorithms, frameworks, and design patterns that AI might not fully grasp or provide.
*/