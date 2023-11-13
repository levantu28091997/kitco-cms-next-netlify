#!/bin/sh

# exec command like so
# ./mkcomponent.sh container Test

if [ "$1" == "container" ]; then
  DIR="cd ./next/containers/"
  echo "Creating container $2"
  ${DIR} && mkdir -p -- "$2" && touch -- "$2"/"$2.tsx" && touch -- "$2"/"$2.module.scss" 
  echo "@import '../../src/core/styles/vars';" > "$2"/"$2.module.scss"
  echo "import styles from './$2.module.scss';" > "$2"/"$2.tsx"
else
  DIR="cd ./next/components/"
  echo "Creating component $2"
  ${DIR} && mkdir -p -- "$2" && touch -- "$2"/"$2.tsx" && touch -- "$2"/"$2.module.scss" 
  echo "@import '../../src/core/styles/vars';" > "$2"/"$2.module.scss"
  echo "import styles from './$2.module.scss';" > "$2"/"$2.tsx"
fi

