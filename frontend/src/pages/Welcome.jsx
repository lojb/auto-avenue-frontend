import React, {useEffect} from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Feedback from "../components/Feedback";
import { background } from "../assets";
import {useSnapshot} from "valtio";
import {state} from "../store";

const Welcome = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    fetch(`http://localhost:8080/users/username/${snap.username}`)
        .then((response) => response.json())
        .then((data) => {
          state.userId = data.id;
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  return (
    <>
      <div className="relative z-0 bg-white">
        <div
          className="bg-cover bg-center bg-no-repeat min-h-screen"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Hero />
        </div>
        <About />

        <Contact />
        <Feedback />
      </div>
    </>
  );
};

export default Welcome;
