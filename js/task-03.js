const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');
galleryList.style.listStyle = 'none';
galleryList.style.display = 'flex';
galleryList.style.flexDirection = 'column';
galleryList.style.justifyContent = 'center';
galleryList.style.alignItems = 'center';

images.forEach(image => {
  const listItem = document.createElement('li');
  const imageElement = document.createElement('img');
  imageElement.src = image.url;
  imageElement.alt = image.alt;

  imageElement.style.width = '250px';
  imageElement.style.height = '200px';
 listItem.style.margin = '10px';

  listItem.appendChild(imageElement);
  galleryList.appendChild(listItem);
});
