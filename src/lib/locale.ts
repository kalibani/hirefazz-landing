"use server";

import { cookies } from "next/headers";

// const changeLang = (lang: 'id' | 'en') => {
//   cookies().set('lang', lang)
// }

// export default changeLang

export default async function changeLang(lang: "id" | "en" | string) {
  cookies().set("lang", lang);
}
