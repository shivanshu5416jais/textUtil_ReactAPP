import React, { useState } from "react";
import ProfileCard from "./ProfileCard/ProfileCard";

export default function About() {
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const toggleStyle = () => {
    if (myStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setbtnText("Enable Light Mode");
    }
  };
  return (
    <>
      <h1>fdsgsdffsd</h1>
      <ProfileCard></ProfileCard>
    </>
  );
}
