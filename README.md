![Holberton school logo](http://imgfz.com/i/j5QenPM.png)
# Rappi App


- App

# Configuración del Entorno de Desarrollo

- Crear una nueva carpeta con el nombre “Lendpi”.

- Dentro de la nueva carpeta creamos un nuevo proyecto de React Native llamado **app**:

    ```bash
  npx react-native init app
  ```

- Descargar los archivos del repositorio de GitHub.

    ```bash
  git clone https://github.com/Virteip/Lendpi.git
  ```

- Ingresamos a la carpeta del repositorio.

  ```bash
  cd Lendpi
  ```

- Cambiamos a la rama develop.

  ```bash
  git checkout develop
  ```

- Ingresar a la carpeta raíz del proyecto y eliminar los archivos **App.js** e **index.js**.

- Copie los siguientes archivos y carpetas desde la carpeta **Lendpi** hacia la carpeta raíz del proyecto:
  - assets/
  - components/
  - model/
  - screens/
  - App.js
  - Index.js

- Ingresar en el archivo `android/app/build.gradle` y agregar al final del archivo:

    ```
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
    ```

- Descargar los siguientes módulos dentro de la carpeta raíz:
  - yarn add @react-navigation/native
  - yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
  - yarn add react-native-paper
  - yarn add react-native-vector-icons
  - yarn add @react-navigation/stack
  - npm install react-native-animatable --save
  - npm install react-native-linear-gradient --save
  - yarn add @react-navigation/drawer
  - yarn add @react-navigation/material-bottom-tabs
  - npm install react-hook-form
  - yarn add @react-native-community/async-storage
  - yarn add @react-native-community/google-signin
  
- Ejecutar la app
  
  - npx react-native run-android
