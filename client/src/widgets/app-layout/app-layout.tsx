import Colleagues from "@/shared/Colleagues";
import Menu from "@/shared/Menu";
import Section from "@/shared/Section";
import { Flex } from "antd";

const AppLayout = () => {
  const teams = [
    { id: 1, url: "ach1.png", title: "Cool" },
    { id: 2, url: "ach2.png", title: "New" },
    { id: 3, url: "ach3.png", title: "Great" },
  ];

  return (
    <div>
      <Menu/>
      <Flex vertical justify="center">
        <Section
          title="Командное взаимодействие"
          description="Лучшие ачивки здесь!!!"
          achievements={teams}
        />
        <Section
          title="Клиентский сервис"
          description="Лучшие ачивки здесь!!!"
          achievements={teams}
        />
        <Colleagues />
      </Flex>
    </div>
  );
};

export default AppLayout;
