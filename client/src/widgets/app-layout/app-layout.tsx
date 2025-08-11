import Achievements from "@/shared/components/Achievements";
import Colleagues from "@/shared/components/Colleagues";
import FlipCard from "@/shared/components/FlipCard/FlipCard";
import Header from "@/shared/components/HeaderLayout";
import Menu from "@/shared/components/Menu";
import ProfileCard from "@/shared/components/ProfileCard";
import Section from "@/shared/components/Section";
import { Flex } from "antd";
import styles from './app-layout.module.css'
const AppLayout = () => {
  const teams = [
    { id: 1, url: "ach1.png", title: "Cool" },
    { id: 2, url: "ach2.png", title: "New" },
    { id: 3, url: "ach3.png", title: "Great" },
  ];
  const setvices = [
    { id: 1, url: "ach4.png", title: "Cool" },
    { id: 2, url: "ach5.png", title: "New" },
    { id: 3, url: "ach6.png", title: "Great" },
    { id: 4, url: "ach7.png", title: "Not bad" },
  ];

  return (
    <>
      <Header url="profile.png" />
      <div className={styles.pageContainer}>
        <Flex vertical>
          <ProfileCard
            fullname="Иванов Марк Андреевич"
            photo="profile.png"
            position="Fullstack Developer"
            department="Отдел разработки инновационных решений"
          />
          <Achievements items={setvices}></Achievements>
          <FlipCard></FlipCard>
        </Flex>
        <div>
          <Menu />
          <Flex vertical justify="center">
            <Section
              title="Командное взаимодействие"
              description="Лучшие ачивки здесь!!!"
              achievements={teams}
            />
            <Section
              title="Клиентский сервис"
              description="Лучшие ачивки здесь!!!"
              achievements={setvices}
            />
            <Colleagues />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
