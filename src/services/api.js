export const getData = async () => {
  // const slideHeader = await getDocuments('slide-header');
  const slideHeader = [
    {
      subtitle: "100% genuine Products",
      "image-slide":
        "https://demo.themefreesia.com/idyllic-fashion/wp-content/uploads/sites/23/2017/08/slider-image-1.jpg",
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      id: "1",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      subtitle: "100% genuine Products",
      "image-slide":
        "https://www.jssor.com/premium/fashion/img/plaza.jpg",
      desc: "You should eat at least 5 serves of vegetables and 2 serves of fruit each day. Choose different colours and varieties.",
      id: "2",
    },
    {
      desc: "We produce high quality, organically certified vegetables, herbs, eggs, fruit and pedigree pork at competitive prices.",
      "image-slide":
        "https://lalunafashion.gr/wp-content/uploads/2021/11/LaLUNA-Website_SLIDER-1-1-1920x870.jpg",
      title: "Lorem ipsum dolor sit amet",
      subtitle: "100% genuine Products",
      id: "3",
    },
  ];
  const promotions = [
    {
      subtitle: "Shoe & Shoe",
      type: "hot sales",
      title: "Big sale",
      image:
        "https://freepngimg.com/thumb/shoes/27695-7-sneaker-transparent.png",
      id: "1",
    },
    {
      type: "DSLR Camera",
      image:
        "https://freepngimg.com/thumb/photo%20camera/2-photo-camera-png-image.png",
      title: "save 20%",
      subtitle: "every order",
      id: "2",
    },
    {
      title: "Big sale",
      subtitle: "Mobile",
      image:
        "https://freepngimg.com/thumb/samsung_mobile_phone/5-2-samsung-mobile-phone-png-hd.png",
      type: "hot sales",
      id: "3",
    },
  ];
  return {
    slideHeader,
    promotions,
  };
};
