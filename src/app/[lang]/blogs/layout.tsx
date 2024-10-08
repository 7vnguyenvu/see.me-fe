import { BlogsEn, BlogsVi } from "@/locales";

import type { Metadata } from "next";

type Props = {
    params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const lang = params.lang || "en";
    const T = lang === "en" ? BlogsEn : BlogsVi;

    return {
        title: T.head.title,
        description: `Nơi SEE.ME chia sẻ về những bài học từ hành trình cá nhân, đôi khi là những nốt thăng trầm trong cuộc sống!`,
    };
}

export default function Root({ children }: { children: React.ReactNode }) {
    return children;
}
