type ApiResponseData<T> = {
  success: boolean;
  message: string;
  data: T;
};

export function createApiResponse<T>(
  data: T,
  success = true,
  message = "success"
): ApiResponseData<unknown> {
  return { success, message, data };
}

export function createListApiResponse<T>(
  data: T,
  total: number,
  success = true,
  message = "success"
): ApiResponseData<unknown> {
  return {
    success,
    message,
    data: {
      list: data,
      total: total,
    },
  };
}
