import Section from "@/shared/components/Section";
import type { IACHProps } from "@/shared/components/types";

const AchievementsPage = () => {
  const achievements: IACHProps[] = [
    {
      title: "Клиентский сервис",
      description: "Лучшие ачивки за клиентский сервис!!!",
      items: [
        { id: 1, url: "ach1.png", title: "Cool" },
        { id: 2, url: "ach2.png", title: "New" },
        { id: 3, url: "ach3.png", title: "Great" },
      ],
    },
    {
      title: "Командное взаимодействие",
      description: "Лучшие ачивки за командное взаимодействие!!!",
      items: [
        { id: 1, url: "ach4.png", title: "Cool" },
        { id: 2, url: "ach5.png", title: "New" },
        { id: 3, url: "ach6.png", title: "Great" },
        { id: 4, url: "ach7.png", title: "Not bad" },
      ],
    },
  ];
  return achievements.map((item, index) => {
    return (
      <Section
        key={index}
        title={item.title}
        description={item.description}
        achievements={item.items}
      ></Section>
    );
  });
};
export default AchievementsPage;
