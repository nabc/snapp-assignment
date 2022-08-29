import axiosInstance from "./axiosInstance";

export async function getContactsList(searchQuery: string) {
  return axiosInstance.get(`passenger${searchQuery}`);
}

export async function getContact(id: number) {
  return await axiosInstance.get(`passenger/${id}`);
}
