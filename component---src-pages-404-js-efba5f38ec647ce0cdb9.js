(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+73+":function(e,a,t){e.exports={layout:"DocLayout-module--layout--2m-0z",main:"DocLayout-module--main--3L6xJ"}},"ATu/":function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t("q1tI"),l=t.n(n),i=t("wZee"),s=t.n(i),o=(t("Veyx"),t("qhky")),r=t("Wbzz"),c=t("3aSG"),m=t.n(c),u=t("IgYj"),d=t.n(u);function E(){return l.a.createElement("nav",{className:d.a.sidebar},l.a.createElement("div",{className:d.a.logo},l.a.createElement(r.a,{to:"/"},l.a.createElement("img",{src:m.a}))),l.a.createElement("h2",null,"Documentation"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs"},"Home")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/styles"},"Styles")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/custom"},"Custom Emojis")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/icons"},"Custom Icons")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/plugins"},"Plugins")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/themes"},"Themes")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/recents"},"Recent Emojis")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/variants"},"Variants")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/position"},"Positioning")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/customize"},"Customization")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/styleCustomization"},"Style Customization")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/i18n"},"I18N Strings"))),l.a.createElement("h2",null,"Reference"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/api"},"API")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/cssVariables"},"CSS Variables")),l.a.createElement("li",null,l.a.createElement(r.a,{activeClassName:d.a.active,to:"/docs/events"},"Events"))))}var p=t("+73+"),S=t.n(p);function f(e){var a=e.children;return Object(n.useEffect)((function(){s.a.highlightAll()}),[]),l.a.createElement("div",{className:S.a.layout},l.a.createElement(o.a,null,l.a.createElement("title",null,"Emoji Button")),l.a.createElement(E,null),l.a.createElement("main",{className:S.a.main},a))}},IgYj:function(e,a,t){e.exports={sidebar:"Sidebar-module--sidebar--2OrhV",logo:"Sidebar-module--logo--2CVgv",active:"Sidebar-module--active--1dRAY"}},Veyx:function(e,a,t){t("Oyvg"),function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:t},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,lookbehind:!0,greedy:!0,inside:t}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:t.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var n=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=t.variable[1].inside,i=0;i<n.length;i++)l[n[i]]=e.languages.bash[n[i]];e.languages.shell=e.languages.bash}(Prism)},w2l6:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var n=t("q1tI"),l=t.n(n),i=t("ATu/");function s(){return l.a.createElement(i.a,null,l.a.createElement("h1",null,"Not Found"),l.a.createElement("div",{style:{fontSize:"3rem"}},"😔"),l.a.createElement("p",null,"Sorry, the page you requested could not be found."))}}}]);
//# sourceMappingURL=component---src-pages-404-js-efba5f38ec647ce0cdb9.js.map