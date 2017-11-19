### Angular脚手架的使用
1. 安装Angular全局变量
    ```
    npm install -g @angular/cli
    ```
2. 创建新项目
    ```
    ng new angular-demo
    ```
3. 启动项目
    ```
    //进入项目路径
    cd angular-demo
    //启动项目
    ng serve/npm start(对照package.json配置)
    ```
4. 浏览器打开http://localhost:4200/ (默认路径)
    ```
    ng serve --open //会自动打开默认浏览器并访问http://localhost:4200/ 
    ```
5. 新建组件
    ```
    // 创建类  
    ng g class class-name   
    // 创建指令  
    ng g directive directive-name   
    // 创建模块  
    ng g module module-name   
    // 创建管道  
    ng g pipe pipe-name   
    // 创建服务  
    ng g service service-name
    ```
6. 启动测试
    ```
    ng test
    ```
7. 编译项目
    ```
    ng build
    ```
8. 查看ng所有指令
    ```
    ng help
    ```


