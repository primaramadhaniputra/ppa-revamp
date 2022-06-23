import TitlePage from "atoms/TitlePage";
import { useState } from "react";
// import { useUsersState } from "recoil/users/atom";
// import { getProfile } from "services/users";
import Footer from "src/components/organism/Footer";
import HomeInput from "src/components/organism/HomeInput";
import Navbar from "src/components/organism/Navbar";
import { dummyInputDropdown } from "utils/dummy";
// import { notify } from "utils/functions";
import { fontSizing } from "utils/styles";
import Banner from "./Banner";
import { ContentWrapper, Wrapper } from "./styles";

export default function Layout() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  // const [userData, setUserData] = useUsersState();

  const handleChangeHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  // useEffect(() => {
  //   console.log("ini user gessss", userData);
  // }, [userData]);

  // useEffect(() => {
  //   getProfile({
  //     path: "/profile",
  //   })
  //     .then((data) => setUserData([data.data.data]))
  //     .catch((err) => notify(err.message, "error"));

  // updateProfile({
  //   path: '/profile',
  //   body: { fullName: 'banana' }
  // }).then(data => console.log('berhasil mengubah profile', data.data))
  //   .catch(err => console.log('bananas', err.message))
  // }, []);

  return (
    <Wrapper>
      <Navbar
        handleChangeHamburgerMenu={handleChangeHamburgerMenu}
        showHamburgerMenu={showHamburgerMenu}
        position="end"
      />
      <ContentWrapper>
        <TitlePage type="h3" styles={{ fontSize: fontSizing["3xl"].fontSize }}>
          Operation / Report
        </TitlePage>
        <HomeInput
          items={dummyInputDropdown}
          title="Menu"
          placeholder="Device / Production / Payload"
        />
        <Banner />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
