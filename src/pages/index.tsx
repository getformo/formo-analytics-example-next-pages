import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { NextPage } from "next/types";
import React from "react";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { GitFork, StarIcon } from "lucide-react";
import { GitHubIcon } from "@/assets/icons/social";

const HomePage: NextPage = () => {
  return (
    <PageLayout
      title="Homepage"
      description="Welcome to the Next.js Web3 Template"
    >
      <Typography variant="h1" className="text-center">
        Welcome to the Next.js Web3 Template
      </Typography>
      <Typography variant="h2" className="text-center">
        A template for building web3 native applications
      </Typography>

      <Link
        href="https://github.com/new?template_name=formo-analytics-example-next-pages&template_owner=getformo"
        target="_blank"
        className="my-12"
      >
        <Button className="gap-2">
          <GitFork />
          Get Started
        </Button>
      </Link>

      <div className="flex flex-col items-center justify-center gap-6 my-8">
        <Typography variant="lead" className="text-center">
          If you find this template helpful, please consider giving it a star on
          GitHub to support the project!
        </Typography>

        <div className="flex gap-4">
          <Link
            href="https://github.com/getformo/formo-analytics-example-next-pages"
            target="_blank"
          >
            <Button className="gap-2" variant={"link"}>
              <GitHubIcon />
              View on GitHub
            </Button>
          </Link>

          <Link
            href="https://github.com/getformo/formo-analytics-example-next-pages/stargazers"
            target="_blank"
          >
            <Button className="gap-2" variant={"link"}>
              <StarIcon />
              Give a Star
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
