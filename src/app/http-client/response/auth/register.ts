import {Group} from "./group";

export interface Register {
  login: string;
  password: string;
  name: string;
  group: Group;
}
