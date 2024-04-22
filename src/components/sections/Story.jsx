import StoryCard from "../StoryCard";
import storyBackground from "../../assets/images/story-background.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

const Story = () => {
  // Gérer le défilement des cartes
  const storyTimeline = useRef("storyTimeline");
  const [sliding, setSliding] = useState("0px");
  const [currentSlide, setCurrentSlide] = useState(1);
  const [timelineLength, setTimelineLength] = useState(null);
  const [timelineWidth, setTimelineWidth] = useState(null);

  const handleSlide = (direction) => {
    setCurrentSlide((currentSlide) => currentSlide + direction);
    const slidingToUse = sliding === "100%" ? "0px" : sliding;
    setSliding(
      parseInt(slidingToUse.substring(0, slidingToUse.length - 2)) +
        (timelineWidth + 64) * -direction +
        "px"
    );
    storyTimeline.current.classList.add("story__content__timeline--moving");
    const timeOut = setTimeout(() => {
      storyTimeline.current.classList.remove(
        "story__content__timeline--moving"
      );
      clearTimeout(timeOut);
    }, 300);
  };

  useEffect(() => {
    setTimelineLength(storyTimeline.current.childNodes.length);

    //calculer la largeur d'une carte
    const dimensions = storyTimeline.current.getBoundingClientRect();
    const timelineWidth = dimensions.width;
    const cardWidth = (timelineWidth - 4 * 64) / 5;
    setTimelineWidth(cardWidth);
  }, []);

  return (
    <>
      <section className="story" id="my-story">
        <div
          className="story__background --background-fade-in"
          style={{ backgroundImage: `url(${storyBackground})` }}
        ></div>
        <h1 className="story__title --view-animated --text-fade-in --entry-text">
          My path to development
        </h1>
        <div className="story__content">
          <div
            ref={storyTimeline}
            className="story__content__timeline"
            style={{ left: sliding }}
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
