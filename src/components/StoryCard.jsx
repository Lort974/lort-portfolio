import rocket from "../assets/images/rocket.png";
import fall from "../assets/images/fall.png";
import shop from "../assets/images/shop.png";
import bacteries from "../assets/images/bacteries.png";
import voyage from "../assets/images/voyage.png";

const StoryCard = () => {
  return (
    <>
      <div className="story__content__timeline__card">
        <h2 className="story__content__timeline__card__title">
          2024 - The raise
        </h2>
        <div className="story__content__timeline__card__content">
          <div className="story__content__timeline__card__content__picture">
            <img src={rocket} alt="Décollage !" />
          </div>
          <div className="story__content__timeline__card__content__text">
            After 12 months of learning and 14 professionalizing projects, I'm
            proud to claim I'm a "React app developer". (level 6 of European
            Qualifications Framework)
          </div>
        </div>
      </div>
      <div className="story__content__timeline__card">
        <h2 className="story__content__timeline__card__title">
          2022 - The fall
        </h2>
        <div className="story__content__timeline__card__content">
          <div className="story__content__timeline__card__content__picture">
            <img src={fall} alt="Motivé" />
          </div>
          <div className="story__content__timeline__card__content__text">
            My own business, a restaurant named "Goutanoo" has definitely
            closed. I had to confront this failure. And I remembered how I loved
            my previous coding experience.
          </div>
        </div>
      </div>
      <div className="story__content__timeline__card">
        <h2 className="story__content__timeline__card__title">
          2018 - The entrepreneur
        </h2>
        <div className="story__content__timeline__card__content">
          <div className="story__content__timeline__card__content__picture">
            <img src={shop} alt="Mon premier projet" />
          </div>
          <div className="story__content__timeline__card__content__text">
            I started my own restaurant named "Goutanoo". And for the first
            time, I coded its shopping website, which brought in 50% of
            turnover.
          </div>
        </div>
      </div>
      <div className="story__content__timeline__card">
        <h2 className="story__content__timeline__card__title">
          2013 - The microbiologist
        </h2>
        <div className="story__content__timeline__card__content">
          <div className="story__content__timeline__card__content__picture">
            <img src={bacteries} alt="Moi, microbiologiste" />
          </div>
          <div className="story__content__timeline__card__content__text">
            First, I was a microbiologist. This scientific path teached me the
            rigor, the analytical skills and organized work.
          </div>
        </div>
      </div>
      <div className="story__content__timeline__card">
        <h2 className="story__content__timeline__card__title">
          2011 - The big trip
        </h2>
        <div className="story__content__timeline__card__content">
          <div className="story__content__timeline__card__content__picture">
            <img src={voyage} alt="LE grand voyage" />
          </div>
          <div className="story__content__timeline__card__content__text">
            I'm from Reunion Island, a French region located in Indian Ocean.
            When I finished my studies, I went to mainland France, looking for
            opportunities.
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
