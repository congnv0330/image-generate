//#region LIBRARIES
import { CMS_ROUTES, ROUTES } from "src/common/constants/routes";
import { INavigationItems } from "src/common/interfaces";
//#endregion

export const navigations: INavigationItems = [
  { path: ROUTES["BUILDER"]["path"], title: ROUTES["BUILDER"]["title"] },
  { path: ROUTES["BLOG"]["path"], title: ROUTES["BLOG"]["title"] },
  // {
  //   path: "https://app.gitbook.com/s/x7KBtPaIA0npg2zpmg8O/midjourney-toan-tap/bat-dau-nhanh",
  //   title: ROUTES["BLOG"]["title"],
  // },
  // { path: ROUTES["RESOURCES"]["path"], title: ROUTES["RESOURCES"]["title"] },
  { path: ROUTES["GENERATE"]["path"], title: ROUTES["GENERATE"]["title"] },
];

export const cmsNavigations: INavigationItems = [
  {
    path: CMS_ROUTES["BLOG"]["INDEX"]["path"],
    title: CMS_ROUTES["BLOG"]["INDEX"]["title"],
  },
  {
    path: CMS_ROUTES["CATEGORY"]["INDEX"]["path"],
    title: CMS_ROUTES["CATEGORY"]["INDEX"]["title"],
  },
];
