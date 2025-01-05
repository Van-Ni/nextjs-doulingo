import { GetCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const userProgressData = getUserProgress();
  const coursesData = GetCourses();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full px-3 mx-auto max-w-[912px]">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default CoursesPage;
