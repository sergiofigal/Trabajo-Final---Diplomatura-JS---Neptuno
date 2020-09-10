<<<<<<< HEAD
const url = "https://api.imgflip.com/get_memes";
=======
const url = "https://api.imgflip.com/get_memes"//localHost:8080/Post
>>>>>>> 11f9453952af99782a529f37c7cc69120fed8fa5

export async function getMemesByPopular() {
  const response = await fetch(`${url}`);
  const responseJson = await response.json();
  return responseJson;
}

export async function getMemesBySearch (q) {

}

export default {
  getMemesByPopular,
};
