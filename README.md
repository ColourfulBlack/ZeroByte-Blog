# ColourfulBlack's Blog Quick Guide

To run dev server for docs folder  
```shell
yarn docs:dev
```

To build static page for docs folder
```shell
yarn docs:build
```

To deploy static generated resources to your remote web server  
Note: export an environment variable named `REMOTE_DEST` like `remote_user_name@remote_address:remote_blog_root` befor deploy
```shell
yarn docs:deploy
```