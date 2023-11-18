# X(Twitter) clone app with firebase & react

## What's this ?

#### ■ X (旧:Twitter) のクローンアプリです。

- React と Firebase で構成されています。
- 使用端末の LAN 設定の変更・コミュニケーションツールの起動等の機能を有しています。
- イメージマップから使用する会議スペースを選択し、指定地点のネットワーク設定に変更します。

## Sample Image

### ■ 実際の画面

以下のような画面を構築します。
Firebase 上のユーザー情報及び、投稿情報を画面にレンダリングします。また、投稿内容は ポストボタンから登録することもでき、内容は Firebase に登録されます。

![SampleView](/docs/images/view.png)

<center>画像タイトル</center>

### ■ Firebase 連携

投稿内容は以下のように Firebase に登録されます。
![firebaseview](/docs/images/firebase.png)

<center>画像タイトル</center>

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
