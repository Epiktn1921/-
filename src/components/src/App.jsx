import React from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";

function PremiumFeature() {
  return (
    <div style={{ background: "#e0f7fa", padding: "15px", marginTop: "10px" }}>
      <h3>🔒 Премиум функционал</h3>
      <p>Добро пожаловать! Теперь вам доступны секретные данные и настройки профиля.</p>
      <ul>
        <li>Редактирование профиля</li>
        <li>История заказов</li>
        <li>Личные сообщения</li>
      </ul>
    </div>
  );
}

function PublicContent() {
  return (
    <div style={{ padding: "15px" }}>
      <h3>🌍 Публичный контент</h3>
      <p>Этот текст видят все пользователи, даже без авторизации.</p>
    </div>
  );
}

function AppContent() {
  const { currentUser, logout } = useAuth();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #eee" }}>
        <h1>Мое Приложение</h1>
        {currentUser && (
          <button onClick={logout} style={{ background: "#ff4d4d", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
            Выйти ({currentUser.email})
          </button>
        )}
      </header>

      <main>
        <PublicContent />

        {currentUser ? (
          <PremiumFeature />
        ) : (
          <div style={{ marginTop: "20px" }}>
            <p>Для доступа к премиум функциям, пожалуйста, авторизуйтесь.</p>
            <LoginForm />
          </div>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
