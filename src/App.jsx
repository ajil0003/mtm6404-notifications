
import React, { useState } from "react";
import notificationsData from "./notifications";
import "./App.css"; 

const App = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const removeNotification = (id) => setNotifications(notifications.filter(notification => notification.id !== id));
  const clearAllNotifications = () => setNotifications([]);

  return (
    <div className="container">
      <h2>Notifications ({notifications.length})</h2>
      <button className="clear-all-btn" onClick={clearAllNotifications}>Clear All</button>
      <div className="notification-list">
        {notifications.map(({ id, name, message }) => (
          <div className="notification-item" key={id}>
            <div><strong>{name}:</strong> {message}</div>
            <button className="dismiss-btn" onClick={() => removeNotification(id)}>Dismiss</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
