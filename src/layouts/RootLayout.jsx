import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getData } from '../services/api';
import {CommonSection} from '../components/Form';

function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      {isHomePage ? (
				<Header />
			) : (
				<CommonSection title={location.pathname.substring(1)}>
					<Header />
				</CommonSection>
			)}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
export const loader = () => {
	return getData();
};
