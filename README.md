# X(Twitter) clone app with firebase & react

## What's this ?

#### ■ X (旧:Twitter) のクローンアプリです。

- React と Firebase で構成されています。
- react-twitter-embed ライブラリを使用しています。
- ※ 動作には Firebase の APIKey を取得する必要があります。

## Sample Image

### ■ 実際の画面

以下のような画面を構築します。
Firebase 上のユーザー情報及び、投稿情報を画面にレンダリングします。また、投稿内容は ポストボタンから登録することもでき、内容は Firebase に登録されます。

_○ 再現した画面構成_
![SampleView](/docs/images/view.png)

### ■ Firebase 連携

投稿内容は以下のように Firebase に登録されます。

_○ Firebase 上での登録_
![firebaseview](/docs/images/firebase.png)

## Usage

#### ※Firebase への登録が必要です。

### Development

- **Start the Development Server:**
  ```bash
  # Starts the app in development mode on localhost:3000
  npm start
  ```

### Testing

- **Run Tests:**
  ```bash
  # Launches the test runner in interactive watch mode
  npm test
  ```

### Build for Production

- **Create Production Build:**
  ```bash
  # Builds the app for production to the `build` folder
  npm run build
  ```

### Eject Configuration

- **Eject Project Configuration:**
  ```bash
  # Ejects the project configuration and scripts (irreversible)
  npm run eject
  ```
