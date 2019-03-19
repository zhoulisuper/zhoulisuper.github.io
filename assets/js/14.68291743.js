(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{204:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("Nginx 是一款轻量级的 HTTP 服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的 IO 性能，时常用于服务端的反向代理和负载均衡。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[n("router-link",{attrs:{to:"./nginx命令.html"}},[t._v("nginx 常用命令")])],1),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),n("p",[n("router-link",{attrs:{to:"./nginx反向代理.html"}},[t._v("nginx 反向代理")])],1),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),n("Valine")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("nginx 介绍")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-优点","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 优点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("支持海量高并发：采用 IO 多路复用 epoll。官方测试 Nginx 能够支持 5 万并发链接，实际生产环境中可以支撑 2-4 万并发连接数。")]),this._v(" "),s("li",[this._v("内存消耗少：在主流的服务器中 Nginx 目前是内存消耗最小的了，比如我们用 Nginx+PHP，在 3 万并发链接下，开启 10 个 Nginx 进程消耗 150M 内存。")]),this._v(" "),s("li",[this._v("免费使用可以商业化：Nginx 为开源软件，采用的是 2-clause BSD-like 协议，可以免费使用，并且可以用于商业。")]),this._v(" "),s("li",[this._v("配置文件简单：网络和程序配置通俗易懂，即使非专业运维也能看懂。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-默认配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-默认配置","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 默认配置")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("user  nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //用户\nworker_processes  1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //进程数 一般和cpu个数一样\nerror_log  /var/log/nginx/error.log warn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //错误日志存放位置\npid        /var/run/nginx.pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   //nginx存放pid位置\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  worker_connections  1024"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //后台允许最大并发数\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  include       /etc/nginx/mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //文件扩展名映射表\n  default_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //默认文件类型\n  log_format  main  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(" - "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_user")]),t._v(" ["),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$time_local")]),t._v('] "'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v("\" '")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$status")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body_bytes_sent")]),t._v(' "'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_referer")]),t._v("\" '")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v('" "'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_x_forwarded_for")]),t._v("\"'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //设置日志模式\n  access_log  /var/log/nginx/access.log  main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //访问日志存放位置\n  sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //开启告诉传输模式\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on;  //减少网络报文数量")]),t._v("\n  keepalive_timeout  65"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //保持连接时间\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on;  //开启gzip")]),t._v("\n  include /etc/nginx/conf.d/*.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //包含自配置文件位置\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen       80"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置监听端口")]),t._v("\n  server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //配置域名\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  /var/log/nginx/host.access.log  main;")]),t._v("\n  location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root   /usr/share/nginx/html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#服务默认启动目录")]),t._v("\n      index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认访问文件")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page  404              /404.html;   # 配置404页面")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# redirect server error pages to the static page /50x.html")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n  error_page   500 502 503 504  /50x.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#错误状态码的显示页面，配置后需要重启")]),t._v("\n  location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root   /usr/share/nginx/html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    proxy_pass   http://127.0.0.1;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    root           html;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_pass   127.0.0.1:9000;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_index  index.php;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    include        fastcgi_params;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deny access to .htaccess files, if Apache's document root")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# concurs with nginx's one")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ /\\.ht {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    deny  all;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-权限控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-权限控制","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 权限控制")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  //不允许访问\n  deny   127.0.0.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  all（所有）\n  //允许访问\n  allow  127.0.0.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  all（所有）\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("为精确匹配符 img请求和目录允许所有访问\nlocation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  allow all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("为精确匹配符 admin目录和请求禁止所有用户访问\nlocation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/admin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  deny all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n//以php结尾的都禁止访问\nlocation ~\\.php$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  deny all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("权限是从上往下执行的，当匹配成功，下面的控制权限就不会执行了")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用命令","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 常用命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-设置虚拟主机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-设置虚拟主机","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx 设置虚拟主机")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建多个 server 通过修改 listen 不同的端口来设置")]),this._v(" "),s("li",[this._v("创建多个 server 通过修改 server_name 不同的 IP 来设置")]),this._v(" "),s("li",[this._v("创建多个 server 通过修改 server_name 不同的域名来设置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx 反向代理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-适配-pc-或移动设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-适配-pc-或移动设备","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx 适配 PC 或移动设备")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen 80"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name nginx2.jspang.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  root /usr/share/nginx/html/pc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v(" ~* "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(Android|webOS|iPhone|iPod|BlackBerry)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    root /usr/share/nginx/html/mobile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  index index.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gzip","aria-hidden":"true"}},[this._v("#")]),this._v(" gzip")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("gzip : 该指令用于开启或 关闭 gzip 模块。")]),t._v(" "),n("li",[t._v("gzip_buffers : 设置系统获取几个单位的缓存用于存储 gzip 的压缩结果数据流。")]),t._v(" "),n("li",[t._v("gzip_comp_level : gzip 压缩比，压缩级别是 1-9，1 的压缩级别最低，9 的压缩级别最高。压缩级别越高压缩率越大，压缩时间越长。")]),t._v(" "),n("li",[t._v("gzip_disable : 可以通过该指令对一些特定的 User-Agent 不使用压缩功能。")]),t._v(" "),n("li",[t._v("gzip_min_length:设置允许压缩的页面最小字节数，页面字节数从相应消息头的 Content-length 中进行获取。")]),t._v(" "),n("li",[t._v("gzip_http_version：识别 HTTP 协议版本，其值可以是 1.1.或 1.0.")]),t._v(" "),n("li",[t._v("gzip_proxied : 用于设置启用或禁用从代理服务器上收到相应内容 gzip 压缩。")]),t._v(" "),n("li",[t._v("gzip_vary : 用于在响应消息头中添加 Vary：Accept-Encoding,使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-全局变量","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 全局变量")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("变量名")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$host")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("请求信息中的 Host，如果请求中没有 Host 行，则等于设置的服务器名")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$request_method")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("客户端请求类型，如 GET、POST")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$remote_addr")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("客户端的 IP 地址")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$args")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("请求中的参数")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$content_length")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("请求头中的 Content-length 字段")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$http_user_agent")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("客户端 agent 信息")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$http_cookie")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("客户端 cookie 信息")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$remote_addr")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("客户端的 IP 地址")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$remote_port")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("客户端的端口")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$server_protocol")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("请求使用的协议，如 HTTP/1.0、·HTTP/1.1`")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$server_addr")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("服务器地址")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$server_name")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("服务器名称")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("$server_port")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("服务器的端口号")])])])])}],!1,null,null,null);s.default=e.exports}}]);