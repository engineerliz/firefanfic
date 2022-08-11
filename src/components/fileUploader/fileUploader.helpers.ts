import { List } from 'immutable';

export const turnFileListIntoList = (fileList: FileList): List<File> => {
  var filesAsList = List<File>();
  for (let i = 0; i < fileList.length; i++) {
    filesAsList = filesAsList.push(fileList.item(i) as File)
  }
  return filesAsList;
}