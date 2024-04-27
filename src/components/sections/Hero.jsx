import heroBackground from "../../assets/images/hero-background.jpg";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Button, Heading, Text } from "@radix-ui/themes";
import { useEffect, useRef } from "react";

const Hero = () => {
  const actionButton = useRef(null);

  //défilement en cliquant sur start here
  useEffect(() => {
    const scrollDown = (e) => {
      const storySection = document.getElementById("my-story");
      const position = storySection.getBoundingClientRect();
      window.scrollBy(0, position.top);
    };

    if (actionButton.current) {
      actionButton.current.addEventListener("click", scrollDown);
    }

    return () => {
      if (actionButton.current) {
        actionButton.current.removeEventListener("click", scrollDown);
      }
    };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero__content --view-animated --fade-out --exit-view">
          <Heading as="h1" size="9">
            Hi, I'm Lort. I'm a developer
          </Heading>
          <Text as="p" size="4">
            You're here to know about me, about my skills, about my projects.
            Let me lead you or jump anywhere, anytime.
          </Text>
          <Button size="3" ref={actionButton}>
            <ArrowDownIcon /> Start here
          </Button>
        </div>
        <div
          className="hero__background"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
