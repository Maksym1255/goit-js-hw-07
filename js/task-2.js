const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const listUl = document.querySelector(".gallery");
listUl.style.display = `flex`;
listUl.style.columnGap = `24px`;
listUl.style.rowGap = `48px`;
listUl.style.flexWrap = `wrap`;
listUl.style.alignItems = `center`;
listUl.style.listStyleType = `none`;

const item = images.map((image) => {
  const itemList = document.createElement("li");
  const imageItem = document.createElement("img");
  imageItem.src = image.url;
  imageItem.alt = image.alt;
  imageItem.width = 320;
  imageItem.height = 200;
  imageItem.style.borderRadius = `5%`;
  imageItem.style.objectFit = `cover`;
 
  itemList.append(imageItem);
  return itemList;
})



listUl.append(...item);
