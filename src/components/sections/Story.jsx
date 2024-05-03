import StoryCard from "../StoryCard";
import storyBackground from "../../assets/images/story-background.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSwipeable } from "react-swipeable";

const Story = () => {
  const { t } = useTranslation("story");
  // Gérer le défilement des cartes
  const [sliding, setSliding] = useState("0px");
  const [currentSlide, setCurrentSlide] = useState(1);
  const [timelineLength, setTimelineLength] = useState(null);
  const [timelineWidth, setTimelineWidth] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [prevWindowWidth, setPrevWindowWidth] = useState(window.innerWidth);

  const handleSlide = (direction) => {
    if (
      (currentSlide < timelineLength && direction === 1) ||
      (currentSlide > 1 && direction === -1)
    ) {
      setCurrentSlide((currentSlide) => currentSlide + direction);
      const slidingToUse = sliding === "100%" ? "0px" : sliding;
      setSliding(
        parseInt(slidingToUse.substring(0, slidingToUse.length - 2)) +
          (timelineWidth + 64) * -direction +
          "px"
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const currentWindowWidth = window.innerWidth;
      if (prevWindowWidth !== currentWindowWidth) {
        setWindowWidth(currentWindowWidth);
        setCurrentSlide(1);
        setSliding("0px");
        setPrevWindowWidth(currentWindowWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [prevWindowWidth]);

  useEffect(() => {
    const storyTimeline = document.querySelector(".story__content__timeline");
    if (storyTimeline) {
      setTimelineLength(storyTimeline.childNodes.length);

      //calculer la largeur d'une carte
      const dimensions = storyTimeline.childNodes[0].getBoundingClientRect();
      const cardWidth = dimensions.width;
      setTimelineWidth(cardWidth);
    }
  }, [windowWidth]);

  //gérer le swipe :
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSlide(1),
    onSwipedRight: () => handleSlide(-1),
    // Ajoutez d'autres directions si nécessaire
  });

  return (
    <>
      <section className="story" id="my-story">
        <div
          className="story__background --background-fade-in"
          style={{ backgroundImage: `url(${storyBackground})` }}
        ></div>
        <h1 className="story__title --view-animated --text-fade-in --entry-text">
          <span>{t("title")}</span>
        </h1>
        <div className="story__content">
          <div
            className="story__content__timeline"
            style={{ left: sliding }}
            {...handlers}
          >
            <StoryCard />
          </div>
        </div>
        <button
          className="story__navigation story__navigation--previous --interactive-element-pop-up"
          onClick={(e) => {
            handleSlide(-1);
          }}
          style={{
            opacity: currentSlide === 1 ? "0" : "100%",
            zIndex: currentSlide === 1 ? "-10" : "1",
          }}
        >
          <ChevronLeftIcon />
        </button>
        <button
          className="story__navigation story__navigation--next --interactive-element-pop-up"
          onClick={(e) => {
            handleSlide(1);
          }}
          style={{
            opacity: currentSlide === timelineLength ? "0" : "100%",
            zIndex: currentSlide === timelineLength ? "-10" : "1",
          }}
        >
          <ChevronRightIcon />
        </button>
      </section>
    </>
  );
};

export default Story;
