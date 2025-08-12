import styles from "./app-layout.module.css";
import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import Header from "@/shared/components/HeaderLayout";
import ProfileCard from "@/shared/components/ProfileCard";
import Menu from "@/shared/components/Menu";
import Achievements from "@/shared/components/Achievements";
const AppLayout = () => {
  const profileInfo = {
    fullname: "Иванов Марк Андреевич",
    photo: "profile.png",
    position: "Fullstack Developer",
    department: "Отдел разработки инновационных решений",
    achievements: [
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
    ],
  };

  return (
    <>
    <Header url={profileInfo.photo} />
      <div className={styles.pfpageContainer}>
        <Flex vertical>
          <ProfileCard
            fullname={profileInfo.fullname}
            photo={profileInfo.photo}
            position={profileInfo.position}
            department={profileInfo.department}
          />
          <Achievements items={profileInfo.achievements[0].items}></Achievements>
        </Flex>
        <div>
          <Menu />
          <Flex vertical justify="center">
            <Outlet />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
