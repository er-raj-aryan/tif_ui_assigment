import React from "react";
import style from "@/styles/LatestArticleSection.module.css";
import ArticleCard from "@/components/ArticleCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 760, min: 0 },
    items: 1,
  },
};

const LatestArticles = [
  {
    id:"#1",
    imageUrl:"grilledTomato.png",
    title:"Grilled  Tomatoes at Home",
    description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    id:"#2",
    imageUrl:"snackForTravel.png",
    title:"Snacks for Travel",
    description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    id:"#3",
    imageUrl:"postWorkout.png",
    title:"Post-workout Recipes",
    description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    id:"#4",
    imageUrl:"HowToGrillCorn.png",
    title:"How To Grill Corn",
    description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    id:"#5",
    imageUrl:"CrunchwrapSupreme.png",
    title:"Crunchwrap Supreme",
    description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    id:"#6",
    imageUrl:"BroccoliCheeseSoup.png",
    title:"Broccoli Cheese Soup",
    description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
];

function LatestArticleSection() {
  return (
    <div className={style.root}>
    <h1 className={style.label}>Latest Articles</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {LatestArticles.map((item,index) => (
          <ArticleCard key={index} imageUrl={item.imageUrl} title={item.title} description={item.description}  />
        ))}
      </Carousel>
    </div>
  );
}

export default LatestArticleSection;
