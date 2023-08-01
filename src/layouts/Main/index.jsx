import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from '@/components/';
import { toKebabCase } from "@/utils/str2kebab";

export function MainLayout() {
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');

  return (
    <>
      <Header />
      <main className={!page ? 'page-customer-search' : `page-${toKebabCase(page)}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}