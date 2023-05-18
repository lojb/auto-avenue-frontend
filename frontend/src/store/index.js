import { proxy } from "valtio";

export const state = proxy({
  username: "",
  userId: 0,
  isUser: false,
});
