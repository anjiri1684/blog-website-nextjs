import { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the the react framework for production - itmakes building fullstack React apps and sites a breeze ships with built-in SSR",
    date: "2024-08-24",
  },
  {
    slug: "getting-started-with-nextjs-2",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the the react framework for production - itmakes building fullstack React apps and sites a breeze ships with built-in SSR",
    date: "2024-08-24",
  },
  {
    slug: "getting-started-with-nextjs-3",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the the react framework for production - itmakes building fullstack React apps and sites a breeze ships with built-in SSR",
    date: "2024-08-24",
  },
  {
    slug: "getting-started-with-nextjs-4",
    title: "Getting started with Nextjs ",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the the react framework for production - itmakes building fullstack React apps and sites a breeze ships with built-in SSR",
    date: "2024-08-24",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
