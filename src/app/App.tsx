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
import { PageTransition } from "./components/PageTransition";
import { BackToTop } from "./components/BackToTop";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Navigation />
            <PageTransition>
              <HomePage />
            </PageTransition>
            <Footer />
            <BackToTop />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <Navigation />
            <PageTransition>
              <AboutPage />
            </PageTransition>
            <Footer />
            <BackToTop />
          </>
        ),
      },
      {
        path: "/project/:projectId",
        element: (
          <>
            <Navigation />
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
            <Footer />
            <BackToTop />
          </>
        ),
      },
      {
        path: "/blog/:postId",
        element: (
          <>
            <Navigation />
            <PageTransition>
              <BlogPostDetail />
            </PageTransition>
            <Footer />
            <BackToTop />
          </>
        ),
      },
      {
        path: "/article/:articleId",
        element: (
          <>
            <Navigation />
            <PageTransition>
              <ArticleDetail />
            </PageTransition>
            <Footer />
            <BackToTop />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <Navigation />
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
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
