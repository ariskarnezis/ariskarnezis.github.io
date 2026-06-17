import { RouterProvider, createBrowserRouter } from "react-router";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProjectDetail } from "./components/ProjectDetail";
import { BlogPostDetail } from "./components/BlogPostDetail";
import { ArticleDetail } from "./components/ArticleDetail";
import { NotFoundPage } from "./components/NotFoundPage";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Analytics } from "./components/Analytics";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Navigation />
            <HomePage />
            <Footer />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <Navigation />
            <AboutPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/project/:projectId",
        element: (
          <>
            <Navigation />
            <ProjectDetail />
            <Footer />
          </>
        ),
      },
      {
        path: "/blog/:postId",
        element: (
          <>
            <Navigation />
            <BlogPostDetail />
            <Footer />
          </>
        ),
      },
      {
        path: "/article/:articleId",
        element: (
          <>
            <Navigation />
            <ArticleDetail />
            <Footer />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <Navigation />
            <NotFoundPage />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Analytics />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
