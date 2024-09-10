import { routerType } from "../types/router.types";
import Introduction from "./Introduction";
import Play from "./Play";

export enum RouterPath {
  Home = "/",
  Play = "/play",
}
const pagesData: routerType[] = [
  {
    path: RouterPath.Home,
    element: <Introduction />,
    title: "introduction",
  },
  {
    path: RouterPath.Play,
    element: <Play />,
    title: "play",
  },
];

export default pagesData;
