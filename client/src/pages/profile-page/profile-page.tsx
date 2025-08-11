import styles from "./profile-page.module.css";
import Achievements from "@/shared/components/Achievements";
import Colleagues from "@/shared/components/Colleagues";
import FlipCard from "@/shared/components/FlipCard/FlipCard";
import Header from "@/shared/components/HeaderLayout";
import Menu from "@/shared/components/Menu";
import ProfileCard from "@/shared/components/ProfileCard";
import Section from "@/shared/components/Section";
import { Flex } from "antd";
interface IProfilePageProps {
  profileInfo: {
    fullname: string;
    photo: string;
    position: string;
    department: string;
    achievements: {
      title: string;
      description: string;
      items: { id: number; url: string; title: string }[];
    }[];
  };
}
const ProfilePage: React.FC<IProfilePageProps> = ({ profileInfo }) => {
  const achv = profileInfo.achievements[0].items;
  return (
    <main>
      <Header url={profileInfo.photo} />
      <div className={styles.pfpageContainer}>
        <Flex vertical>
          <ProfileCard
            fullname={profileInfo.fullname}
            photo={profileInfo.photo}
            position={profileInfo.position}
            department={profileInfo.department}
          />
          <Achievements items={achv}></Achievements>
        </Flex>
        <div>
          <Menu />
          <Flex vertical justify="center">
            {profileInfo.achievements.map((item, index) => {
              return (
                <Section
                  key={index}
                  title={item.title}
                  description={item.description}
                  achievements={item.items}
                ></Section>
              );
            })}
            <Colleagues />
          </Flex>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
