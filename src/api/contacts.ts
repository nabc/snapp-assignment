import axiosInstance from "./axiosInstance";

export async function getContactsList() {
  // /passenger/?where={"first_name":{"contains":"Ab"},"last_name":{"contains":"a"}}&sort=createdAt DESC&limit=30
  // /passenger?limit=10&skip=0
  // TODO: should get filter, limit & skip as arguments
  // TODO: should have a function that generates "where" param from filter object
  // TODO: limit & skip are hard coded for now, but they should be dynamic

  const { data } = await axiosInstance.get("passenger?limit=12&skip=0");
  return data;
}

export async function getContact(id: number) {
  const { data } = await axiosInstance.get(`passenger/${id}`);
  return data;
}
