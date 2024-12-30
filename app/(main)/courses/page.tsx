import { GetCourses } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  //   const userProgressData = getUserProgress();
  const coursesData = GetCourses();

  const [courses] = await Promise.all([coursesData]);
  console.log("🚀 ~ CoursesPage ~ coursesData:", courses);

  return (
    <div className="h-full px-3 mx-auto max-w-[912px]">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List courses={courses}  />
      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default CoursesPage;
