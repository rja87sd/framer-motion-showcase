import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="header-grid min-h-screen p-24">
      <NavBar />
      <div className="g-main">
        <h1>Objective</h1>
        <p>
          Explore the integration of animations in a Next.js application using
          Framer Motion. You&apos;ll create a simple application that displays
          three images with engaging animations to demonstrate your
          understanding of animation effects and their implementation in web
          development.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>Instructions</h2>
        <h3>Part 1: Setting Up Your Project</h3>
        <h4>Create a New Next.js App:</h4>
        <p>
          Use create-next-app to initiate your project. Choose a project name
          that reflects the nature of this assignment, like
          framer-motion-showcase.
        </p>
        <h4>Install Dependencies:</h4>
        <p>
          Install Framer Motion by running npm install framer-motion in your
          project directory. This library enables the animation of elements in
          your React applications.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h3>Part 2: Building Your Application</h3>
        <h4>Prepare Your Images:</h4>
        <p>
          Select three images from Unsplash that you find visually appealing.
          Download these images and add them to the public folder in your
          Next.js project.
        </p>
        <h4>Create Animated Components:</h4>
        <p>
          Develop three separate components, each responsible for displaying one
          of the images you&apos;ve chosen. Name these components in a way that
          reflects the content or theme of the images, such as MountainView.js,
          Cityscape.js, and ForestPath.js.
        </p>
        <p>
          In each component, use a motion.div wrapper from Framer Motion to
          enclose an &apos;Image&apos; tag for displaying your selected image.
          Set up animations for transitions or while hovering. Examples of
          animations include scaling up on hover, fading in on load, or rotating
          slightly to catch the viewer&apos;s attention.
        </p>
        <h4>Integrate Components into Your Main Page:</h4>
        <p>
          Import and use your animated components in the index.js page. Arrange
          them in a visually pleasing layout using CSS Grid or Flexbox.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h3>Part 3: Deploying Your Project</h3>
        <h4>Deploy to Netlify:</h4>
        <p>
          Follow Netlify&apos;s documentation to deploy your Next.js
          application. Ensure your GitHub repository is connected to Netlify and
          configure the build settings as necessary.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h3>Submission</h3>
        <h4>Deploy to Netlify:</h4>
        <p>
          Follow Netlify&apos;s documentation to deploy your Next.js
          application. Ensure your GitHub repository is connected to Netlify and
          configure the build settings as necessary.
        </p>
      </div>
    </main>
  );
}
