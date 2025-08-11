import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404Page from "@pages/error404-page/";
import LoginPage from "@/pages/login-page";
import AppLayout from "@/widgets/app-layout";
import ProfilePage from "@/pages/profile-page";
import AchievementsPage from "@/pages/achievements-page";
import ActivityPage from "@/pages/activity-page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/" element={<LoginPage />} /> Сначала пользователь попадает на страницу логина, 
        выполняется проверка, если пользователь уже авторизован, то автоматически направляем его на "/user:id/achivements"*/}
        <Route element={<AppLayout />}>
<<<<<<< HEAD
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Error404Page />} />
=======
          {/* 
          опираясь на наши планы, 
          в нашем преокте пока вижу вот такие маршруты.
          MainPage предлагаю сделать по аналогии с универсальной формой, 
          как это у нас было в 3 и 4 домашках (пропсами передавать action либо achivements либо colleagues)
          */}
          <Route path="/" element={<ProfilePage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Route>

          <Route path="*" element={<Error404Page />} />
>>>>>>> 7a8afaf (Добавлен раздел коллеги в виджете Профиль)
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
