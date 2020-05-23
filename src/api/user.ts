import { apiClient } from "./client";

export type SearchRes = {
  data: {
    users: any;
    total: number;
  };
};

export async function search() {
  return apiClient.get<SearchRes>("/employee/users");
}
