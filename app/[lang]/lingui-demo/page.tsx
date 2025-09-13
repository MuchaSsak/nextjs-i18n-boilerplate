import { initLingui, PageLangParam } from "@/services/lingui/initLingui";
import LinguiDemoPage from "@/app/[lang]/lingui-demo/components/LinguiDemoPage";

export default async function Page(props: PageLangParam) {
  const { lang } = await props.params;
  initLingui(lang);

  return <LinguiDemoPage />;
}
