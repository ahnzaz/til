# [Native File System API](https://developers.google.com/web/updates/2019/08/native-file-system)

## Using native file system API
### Enabling via chrome://flags
### Read a file from the local file system.
### Ask the user to pick a file to read.
```window.chooseFileSystemEntries```
### Read a file from the file system
### Putting it all together

## Write the file to the local file system
### Create a new file.
```window.chooseFileSystemEntries()``` with ```{type:'saveFile'}```은 'save'모드로 file picker 다이얼로그를 띄운다.
### Save changes to the original file
```createWriter()```호출로 ```FileSystemWriter``` 객체를 얻어서 File writing에 사용한다.
```javascript
async function writeFile(fileHandle, contents) {
  // Create a writer (request permission if necessary).
  const writer = await fileHandle.createWriter();
  // Make sure we start with an empty file
  await writer.truncate(0);
  // Write the full length of the contents
  await writer.write(0, contents);
  // Close the file and write the contents to disk
  await writer.close();
}
```
```keepExistingData``` flag가 추후 마일스톤에 포함될 것임.
사용자가 File write 권한을 grant하지 않은 경우 ```createWriter()``` API가 ```DOMException```을 던질 것이므로 앱이 적절하게 처리해야 함.

## What else is possible?
### Open a directory and enumerate its contents
```{type:'openDirectory'``` option으로 호출 시 directory를 가져올 수 있다.

## What's currently supported
- Handle은 serializable하지 않다. 즉 ```postMessage()```로 전송하거나 indexDB에 저장할 수 없다는 의미이다.
- Non-atomic writes가 가능하다. (```FileSystemFileHandle.createWriter()```를 ```inplace:true``` 옵션으로 호출하면 된다.)
- ```WritableStream```을 통해 파일을 쓴다.
- ```FileSystemDirectoryHandle.resolve()``` method. 이건 뭐지?

## Security and permissions
### Opening a file or saving a new file
#### Restricted folder
### Modifying an existing file or directory
#### Permission prompt
### Transparency
![Omnibox](https://developers.google.com/web/updates/images/2019/08/fs-save-icon.jpg)
파일 저장 권한이 있는 경우 위 아이콘이 뜬다.

## Permission persistence
탭이 살아 있는 동안에만 퍼미션이 유지됨. 탭을 닫으면 모든 권한이 해지되며 다시 탭을 열고 API를 요청했을 때 퍼미션 요청 창이 또 뜸.
추후 마일스톤에서는 PWA앱에 한하여 handle을 IndexedDB에 저장해 놓고 page reload에 상관 없이 사용할 수 있도록 지원할 예정이다.