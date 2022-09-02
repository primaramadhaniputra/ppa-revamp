import { Grid, JustifyContentType } from "@hudoro/neron";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "utils/dummy";
import StyledTextDropdownUser from "atoms/StyledTextDropdownUser";
import { getProfile } from "services/users";
import { notify } from "utils/functions";
import { Container, Wrapper } from "./styles";
import DeskTopSubMenu from "./DeskTopSubMenu";

interface IProps {
  position: "start" | "center" | "end";
}

export default function DesktopMenu({ position }: IProps) {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const [userName, setUserName] = useState("");
  const [isDropdownUser, setIsDropdownUser] = useState(false);

  // function for check outside click
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActiveDropdown(-1);
          setIsDropdownUser(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  //

  const handleActiveNavbar = (index: number) => {
    if (activeDropdown === index) {
      return setActiveDropdown(-1);
    }
    return setActiveDropdown(index);
  };

  useEffect(() => {
    getProfile({
      path: "profile",
    })
      .then((res) => setUserName(res.data.data.fullName.slice(0, 6)))
      .catch((err) => notify(err.message, "error"));
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Container
        style={{ flex: 1 }}
        container
        justifyContent={position as JustifyContentType}
      >
        {Link.map((item, index) => (
          <Grid container key={index}>
            <Grid container>
              <StyledTextDropdownUser
                title={item.title}
                handleClick={() => handleActiveNavbar(index)}
                styles={{ color: "white", fontSize: "15px" }}
              />
            </Grid>
            {
              <DeskTopSubMenu
                data={item.subMenu}
                isActive={activeDropdown === index}
              />
            }
          </Grid>
        ))}
      </Container>
      <Grid container gap={8} alignItems="center">
        <StyledTextDropdownUser
          user={{ name: userName || "Undefined" }}
          isDropdownUser={isDropdownUser}
          setIsDropdownUser={setIsDropdownUser}
        />
      </Grid>
    </Wrapper>
  );
}
