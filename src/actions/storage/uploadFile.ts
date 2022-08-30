// import Firebase from 'firebase/compat/app'
import 'firebase/storage';
import { List } from 'immutable';
import { v4 as uuid_v4 } from 'uuid';
import { turnFileListIntoList } from '../../components/fileUploader/fileUploader.helpers';
import Asset from '../../models/artifact/AssetModel';

export const uploadFile = (
  imageAsFile: File,
  onSuccess: (asset: Asset) => void,
) => {
  // console.log('start of upload', imageAsFile.type)

  // // if (imageAsFile.type === 'image/png') {
  // //   console.error(`Not an image, the image file is a ${imageAsFile.type}`)
  // // }
  // const id = uuid_v4();
  // const uploadTask = Firebase.storage().ref(`/images/${id}`).put(imageAsFile)

  // return uploadTask.on('state_changed',
  //   (snapShot) => {
  //     console.log(snapShot)
  //   }, (err) => {
  //     console.log(err)
  //   }, () => {
  //     Firebase.storage().ref('images').child(id).getDownloadURL()
  //       .then(url => {
  //         onSuccess({ id, url })
  //       })
  //   })
}

export const uploadFileList = (
  fileList: FileList,
  onSuccess?: (assets: List<Asset>) => void,
) => {
  // var assetList = List<Asset>();

  // return Promise.all(turnFileListIntoList(fileList).map(imageAsFile => {
  //   const id = uuid_v4();
  //   const uploadTask = Firebase.storage().ref(`/images/${id}`).put(imageAsFile)

  //   return new Promise((resolve) => uploadTask.on('state_changed',
  //     (snapShot) => {
  //       console.log(snapShot)
  //     }, (err) => {
  //       console.log(err)
  //     }, () => {
  //       Firebase.storage().ref('images').child(id).getDownloadURL()
  //         .then((url: string) => {
  //           assetList = assetList.push({ id, url });
  //           console.log('uploadFileList assets', assetList);

  //           return resolve(assetList)
  //         })

  //     }))
  // })
  // ).then((test) => {
  //   console.log('List on success', assetList, test)
  //   onSuccess?.(assetList)
  // })
}