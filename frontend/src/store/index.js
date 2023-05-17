import { proxy } from "valtio";

export const state = proxy({
  username: "",
  isUser: false,
});
