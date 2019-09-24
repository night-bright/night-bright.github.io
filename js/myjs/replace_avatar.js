var touxiang = "{{ url_for( theme.avatar.url | default(theme.images + '/avatar.gif') ) }}";
console.log(touxiang);
