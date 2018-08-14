// const temp = 150;

// if (temp >= 60 && temp <= 90) {
//   console.log('It is pretty nice out');
// }

// if (temp <= 0 || temp >= 120) {
//   console.log('You can go outside');
// }

const isGuestOneVegan = true;
const isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer up vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Offer vegan');
} else {
  console.log('Offer anything');
}
