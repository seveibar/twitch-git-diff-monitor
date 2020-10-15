# twitch-git-diff-monitor

Let twitch viewers see the last lines of code you changed. Made on [seveibar's twitch stream](https://twitch.tv/seveibar)

![](https://user-images.githubusercontent.com/1910070/96106915-c1494b00-0ea9-11eb-9313-1503b96dfa65.gif)
![](https://user-images.githubusercontent.com/1910070/96177627-262d9100-0efc-11eb-94e7-456d3c0066c9.gif)

## Features

- Helps people understand what you've changed since your last commit
- Runs "git diff" to find changed files in your git repository
- Displays changes by cycling through your files as a widget
- Easy to install & run, Integrates into OBS easily

## Installation

```bash
npm install -g twitch-git-diff-monitor

# In your project directory, run twitch-git-diff-monitor

$ twitch-git-diff-monitor
Running twitch-git-diff-monitor on port 4555

In OBS, add a browser window to http://localhost:4555
```

## Open in a windowless Chrome

If you want to run it in a chrome window without tabs instead of in OBS, use `google-chrome --app=http://address.com`

# Users!

Do you use this? Edit this README and submit a PR to add your stream!

- [seveibar](https://twitch.tv/seveibar)
