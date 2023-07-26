import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import AbsoluteContainer from "@components/Navbars/AbsoluteContainer";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/SaasNav";
import CommingSoon from "@components/Style2/CommingSoon";

const PageCommingSoon = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Macinson - Coming Soon</title>
      </Head>

      <MainLayout>
        <AbsoluteContainer>
          <TopNav />
          <Navbar navbarRef={navbarRef} />
        </AbsoluteContainer>
        <main className='comming-soon-page style-5'>
          <CommingSoon />
        </main>
      </MainLayout>
    </>
  );
};

export default PageCommingSoon;
