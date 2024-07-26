import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUser1 = signUpUser(firstName, lastName);
  const uploadPhoto1 = uploadPhoto(fileName);

  return Promise.allSettled([signUpUser1, uploadPhoto1]).then((values) => {
    const result = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        result.push({ status: element.status, value: element.value });
      } else {
        result.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return result;
  });
}
