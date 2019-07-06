let memes = [
  "https://sports-images.vice.com/images/2017/01/25/when-nick-young-the-basketball-player-met-nick-young-the-meme-body-image-1485378510.jpg",
  "https://steemitimages.com/DQmX8zvPuPz5wn3UrV4T2ZEsgfDV8PzGcCfLdQCopNpughS/success.jpg",
  "https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg",
  "https://www.meme-arsenal.com/memes/072e3bda503faa894d1688ac48554fe1.jpg",
  "http://scripts.cac.psu.edu/users/a/l/alb191/webcamp/maleena/meme21.jpg",
  "https://i.imgflip.com/1d7avw.jpg",
  "https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg"
]

export default () => {
  let newMeme = memes[Math.floor(Math.random()*memes.length)];

  return newMeme;
}