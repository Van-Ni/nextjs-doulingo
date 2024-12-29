import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { title } from "process";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse px-6 gap-[46px]">
      <StickyWrapper>
        <UserProgress
          activeCourses={{title: "Spanish", imageSrc: "/es.svg"}}
          hearts={100}
          points={10}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={"VietNam"} />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
