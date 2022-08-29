import axiosInstance from "./axiosInstance";

export async function getContactsList(searchQuery: string) {
  // /passenger/?where={"first_name":{"contains":"Ab"},"last_name":{"contains":"a"}}&sort=createdAt DESC&limit=30
  // /passenger?limit=10&skip=0

  console.log("getContactsList searchQuery", searchQuery);

  return axiosInstance.get(`passenger${searchQuery}`);
}

export async function getContact(id: number) {
  const { data } = await axiosInstance.get(`passenger/${id}`);
  return data;
}
