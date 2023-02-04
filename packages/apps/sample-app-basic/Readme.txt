App Paused:

# This app has the limitation where it won't compile from here due to fact that we are using builder-rollup.js for building
# builder-rollup.js looks for "src", we did that but still we find problems as it won't bring in external dependencies since it is meant to build libraries.

So we have to use an app builder instead of a library builder.
