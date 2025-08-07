import SliderAdv from "@/shared/SliderAdv";
const AppLayout = () => {
  const images = [
    { id: 1, url: "ach1.png", title: "1" },
    { id: 2, url: "ach2.png", title: "2" },
    { id: 3, url: "ach3.png", title: "3" },
  ];

  return (
    <div style={{ width: 660, height: 279 }}>
      <SliderAdv items={images} />
    </div>
  );
};

export default AppLayout;
