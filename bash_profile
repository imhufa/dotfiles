# [ref]: https://github.com/darrylabbate/dotfiles/blob/master/bash/.bash_profile

# proper $PATH appending

	```
	PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
	export PATH=/path/to/append${PATH:+:${PATH}}
	```

# source if file exists

	```
	if [[ -f "/path/tp/.file" ]]; then
		source /path/to/.file
	fi
	```

# source file if pkg directory exists

	```
	if [[ -d "/path/to/pkg/dir" ]]; then
		source /path/to/.file
	fi

