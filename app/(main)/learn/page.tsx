import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { title } from "process";
import { getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const unitsData = getUnits();
  const userProgressData = getUserProgress();

  const [userProgress, units] = await Promise.all([userProgressData, unitsData]);
  console.log("🚀 ~ LearnPage ~ units:", units)

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse px-6 gap-[46px]">
      <StickyWrapper>
        <UserProgress
          activeCourses={{ title: "Spanish", imageSrc: "/es.svg" }}
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
