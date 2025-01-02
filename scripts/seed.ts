import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Database ");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 3,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 4,
        title: "Croation",
        imageSrc: "/hr.svg",
      },
      {
        id: 5,
        title: "Japanese",
        imageSrc: "/jp.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1", // Spanish
        description: "Learn the Baaics of Spanish",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Learn th Basics
        title: "Nouns",
        order: 1,
      },
      {
        id: 2,
        unitId: 1, // Learn th Basics
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1, // Learn th Basics
        order: 3,
        title: "Verbs",
      },
      {
        id: 4,
        unitId: 1, // Learn th Basics
        order: 4,
        title: "Verbs",
      },
      {
        id: 5,
        unitId: 1, // Learn th Basics
        order: 5,
        title: "Verbs",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "The man"',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: '"The man"',
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "The robot"',
      },
    ]);
    
    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "The man"',
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: '"The man"',
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "The robot"',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        text: "El hombre",
        correct: true,
        imageSrc: "/man.svg",
        audioSrc: "es_man.mp3",
      },
      {
        challengeId: 1,
        text: "la mujer",
        correct: false,
        imageSrc: "/woman.svg",
        audioSrc: "es_woman.mp3",
      },
      {
        challengeId: 1,
        text: "el robot",
        correct: false,
        imageSrc: "/robot.svg",
        audioSrc: "es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        text: "El hombre",
        correct: true,

        audioSrc: "es_man.mp3",
      },
      {
        challengeId: 2,
        text: "la mujer",
        correct: false,

        audioSrc: "es_woman.mp3",
      },
      {
        challengeId: 2,
        text: "el robot",
        correct: false,

        audioSrc: "es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        text: "El hombre",
        correct: false,
        imageSrc: "/man.svg",
        audioSrc: "es_man.mp3",
      },
      {
        challengeId: 3,
        text: "la mujer",
        correct: false,
        imageSrc: "/woman.svg",
        audioSrc: "es_woman.mp3",
      },
      {
        challengeId: 3,
        text: "el robot",
        correct: true,
        imageSrc: "/robot.svg",
        audioSrc: "es_robot.mp3",
      },
    ]);

    console.log("Seeding Finished");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed the Database.");
  }
};

main();
