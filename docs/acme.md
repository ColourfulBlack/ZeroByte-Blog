---
title: "使用acme配合Let's Encrypt配置网站https"
date: 2021-04-11
tags:
  - HTTPS
  - "Let's Encrypt"
  - acme.sh
categories:
  - 运维
publish: true
---

<!-- <a href="/whyhttps/">我们为什么要使用https</a> -->

所以作为一个博主，有必要把自己的博客从http迁移到https。

由于acme.sh的简便与Let's Encrypt的免费，我选择了他们。

## 安装acme.sh
安装acme.sh，参考[官方教程](https://github.com/acmesh-official/acme.sh#1-how-to-install)

## 申请证书
根据自己的DNS服务商选择对应的dns api以申请证书，参考[官方教程](https://github.com/acmesh-official/acme.sh/wiki/dnsapi)

## 安装证书
根据自己的服务器类型安装证书，参考[官方教程](https://github.com/acmesh-official/acme.sh#3-install-the-cert-to-apachenginx-etc)

## 配置https
调整自己的服务器配置文件

博主使用的是nginx，这是我的配置文件

```config
server {
  listen 80;
  server_name blog.0bps.com;
  rewrite ^(.*)$ https://${server_name}$1 permanent;
}

server {
  listen 443;
  server_name blog.0bps.com;
  ssl on;
  ssl_certificate   /etc/nginx/ssl/cert.pem;
  ssl_certificate_key  /etc/nginx/ssl/key.pem;
  ssl_protocols       SSLv3 TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers         HIGH:!aNULL:!MD5;
  location / {
    root /www/blog;
    index index.html;
  }
  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
    root html;
  }
}
```