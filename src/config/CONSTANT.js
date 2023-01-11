// attendance-service base api
export const BASE_ATTENDANCE_SERVICE =
  "https://mewurk-attendance.azurewebsites.net/api/v1/attendanceservice/";

export const UPDATE_STATUS_INTERVAL = 5 * 60 * 1000;
export const BASE_EMPLOYEE_SERVICE =
  "http://mewurk-employeeservice.azurewebsites.net/api/v1/employeeservice/";

export const API = {
  POST: "post",
  GET: "get",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};

export const LOCAL_STORAGE = {
  deviceDetails: "DEVICE_DETAILS",
  deviceSetting: "DEVICE_SETTINGS",
  employeeList: "EMPLOYEE_LIST",
};
