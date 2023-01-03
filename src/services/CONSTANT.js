import {
    BASE_ATTENDANCE_SERVICE,
  } from "../config/CONSTANT"


// Attendance
export const GET_KIOSK_SETTINGS = (id) => {
    return `${BASE_ATTENDANCE_SERVICE}kiosk/getkiosksettings/${id}`
  }

  export const LOGOUT_FROM_DEVICE = (id) => {
    return `${BASE_ATTENDANCE_SERVICE}device/logout/${id}`
  }
  