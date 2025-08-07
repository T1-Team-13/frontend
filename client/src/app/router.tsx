import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@pages/main-page";
import Error404Page from "@pages/error404-page/";
import LoginPage from "@/pages/login-page";
import AppLayout from "@/widgets/app-layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* 
          опираясь на наши планы, 
          в нашем преокте пока вижу вот такие маршруты.
          MainPage предлагаю сделать по аналогии с универсальной формой, 
          как это у нас было в 3 и 4 домашках (пропсами передавать action либо achivements либо colleagues)
          */}
          <Route path="/user:id/achivements" element={<MainPage />} />
          <Route path="/user:id/colleagues" element={<MainPage />} />
        </Route>
        <Route path="/" element={<LoginPage />} /> {/* Сначала пользователь попадает на страницу логина, 
        выполняется проверка, если пользователь уже авторизован, то автоматически направляем его на "/user:id/achivements"*/}
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
