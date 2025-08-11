import ProfilePage from "@/pages/profile-page";
import FlipCard from "@/shared/components/FlipCard/FlipCard";
import styles from "./app-layout.module.css";
import { Flex } from "antd";

const AppLayout = () => {
  const user = {
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
    {/*<Flex align="center" justify="center" wrap gap='30px' style={{width: '50%'}}>
      <FlipCard
        url={"ach4.png"}
        title="Cool"
        description="Выдается всем новым сотрудникам"
      />
       <FlipCard
        url={"ach1.png"}
        title="Notbad"
        description="Выдается всем новым сотрудникам"
      />
       <FlipCard
        url={"ach2.png"}
        title="Good"
        description="Выдается всем новым сотрудникам"
      />
       <FlipCard
        url={"ach4.png"}
        title="Nice"
        description="Выдается всем новым сотрудникам"
      />
       <FlipCard
        url={"ach3.png"}
        title="okay"
        description="Выдается всем новым сотрудникам"
      />
       <FlipCard
        url={"ach7.png"}
        title="Stop"
        description="Выдается всем новым сотрудникам"
      />
       <FlipCard
        url={"ach5.png"}
        title="Finefellow"
        description="Выдается всем новым сотрудникам"
      />
       <FlipCard
        url={"ach6.png"}
        title="Super"
        description="Выдается всем новым сотрудникам"
      />
      </Flex>*/}
      {<ProfilePage profileInfo={user}></ProfilePage>}
    </>
  );
};

export default AppLayout;
