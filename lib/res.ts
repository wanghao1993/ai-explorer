type ApiResponseData = {
  success: boolean;
  message: string;
  data: any;
};

export function createApiResponse(
  data: any,
  success = true,
  message = "success"
): ApiResponseData {
  return { success, message, data };
}

export function createListApiResponse(
  data: any,
  total: number,
  success = true,
  message = "success"
): ApiResponseData {
  return {
    success,
    message,
    data: {
      list: data,
      total: total,
    },
  };
}
