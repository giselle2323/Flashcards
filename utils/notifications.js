import { AsyncStorage } from "react-native";
import { Notifications } from "expo";

import * as Permissions from "expo-permissions";
import { background, primary } from "./colors";

const STORAGE_KEY = "NOTIFICATION";
const NOTIFICATION_CHANNEL_ID = "QUICK_REMINDERS";

export function removeNotifications() {
  return AsyncStorage.removeItem(STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function sendNotification() {
  return {
    title: "Flashcards",
    body: "👋 Forgot to study? here's a quick reminder",
    ios: {
      sound: true,
    },
    android: {
      channelId: NOTIFICATION_CHANNEL_ID,
      sticky: false,
      color: background,
    },
  };
}

function createNotificationChannel() {
  return {
    name: "Daily Reminder",
    description: "A daily remainder to keep you tracked",
    sound: true,
    priority: "high",
  };
}

export function createLocalNotification() {
  AsyncStorage.getItem(STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.createChannelAndroidAsync(
              NOTIFICATION_CHANNEL_ID,
              createNotificationChannel()
            )
              .then(() => {
                Notifications.cancelAllScheduledNotificationsAsync();

                const tomorrow = new Date();

                // tomorrow.setDate(tomorrow.getDate() + 1);
                // tomorrow.setHours(20);
                // tomorrow.setMinutes(0);

                Notifications.scheduleLocalNotificationAsync(
                  sendNotification(),
                  {
                    time: tomorrow.getTime() + 6000,
                    repeat: "minute",
                  }
                );

                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(true));
              })
              .catch((error) => {
                console.log("error", error);
              });
          }
        });
      }
    });
}
