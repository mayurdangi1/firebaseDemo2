import { BASE_ATTENDANCE_SERVICE } from "../config/CONSTANT";

// Attendance
export const GET_KIOSK_SETTINGS = (id) => {
  return `${BASE_ATTENDANCE_SERVICE}kiosk/getkiosksettings/${id}`;
};

export const LOGOUT_FROM_DEVICE = (id) => {
  return `${BASE_ATTENDANCE_SERVICE}device/logout/${id}`;
};

export const POST_DEVICE_DEATILS = () => {
  return `${BASE_ATTENDANCE_SERVICE}device/register`;
};
export const PUT_FACE_CAPTURE = () => {
  return `${BASE_ATTENDANCE_SERVICE}device/upload/image`;
};

export const PUT_STATUS_UPDATE = () => {
  return `${BASE_ATTENDANCE_SERVICE}/device/updatestatus`;
};
