import { User } from '../user/user.entity';
import { History } from '../history/history.entity';

export const addNewActionToHistory = async (user: User, action: string) => {
  const actionTime = new Date();
  const date =
    actionTime.getFullYear() +
    '-' +
    (actionTime.getMonth() + 1) +
    '-' +
    actionTime.getDate();
  const time =
    actionTime.getHours() +
    ':' +
    actionTime.getMinutes() +
    ':' +
    actionTime.getSeconds();

  const fullDateAndTime = new Date().toLocaleString();
  const history = new History();
  history.userId = user.id;
  history.date = date;
  history.time = time;
  history.action = action;
  history.fullDateAndTime = fullDateAndTime;

  await history.save();
};
