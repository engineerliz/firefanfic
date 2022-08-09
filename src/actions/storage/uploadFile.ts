import Firebase from 'firebase/app'
import 'firebase/storage';
import { v4 as uuid_v4 } from 'uuid';

export const uploadFile = (
  imageAsFile: File,
  onSuccess: (id: string, url: string) => void,
) => {
  console.log('start of upload', imageAsFile.type)
  // async magic goes here...
  if (imageAsFile.type === 'image/png') {
    console.error(`Not an image, the image file is a ${imageAsFile.type}`)
  }
  const imageId = uuid_v4();
  const uploadTask = Firebase.storage().ref(`/images/${imageId}`).put(imageAsFile)
  //initiates the firebase side uploading 
  uploadTask.on('state_changed',
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      Firebase.storage().ref('images').child(imageId).getDownloadURL()
        .then(fireBaseUrl => {
          onSuccess(imageId, fireBaseUrl)
        })
    })
}