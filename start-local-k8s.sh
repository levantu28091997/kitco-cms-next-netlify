#!/usr/bin/env bash

CONTEXT_NAME="kitco-frontend-local"

# Get the path to the script. This nightmare brought to you by:
#   https://stackoverflow.com/questions/59895/how-to-get-the-source-directory-of-a-bash-script-from-within-the-script-itself
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )";

CURRENT_CONTEXT="$(kubectl config current-context)"

if [ "${CURRENT_CONTEXT}" != "${CONTEXT_NAME}" ]; then
  echo -n "Your context does not match '${CONTEXT_NAME}', would you like to switch to it? (y/n)"
  read -r switch_context
  if [ "$switch_context" != "${switch_context#[Yy]}" ]; then
    kubectl config use-context $CONTEXT_NAME && configcode=$? || configcode=$?
    if [ $configcode == 1 ]; then
      echo "The context does not exist yet! Would you like to create and switch to it via this script? (y/n)"
      read -r create_context
      if [ "$create_context" != "${switch_context#[Yy]}" ]; then
        kubectl config set-context $CONTEXT_NAME --cluster=docker-desktop --user=docker-desktop --namespace=$CONTEXT_NAME
        kubectl config use-context $CONTEXT_NAME
      else
        exit
      fi
    fi
  else
    exit
  fi
fi

echo "Deploying ${CONTEXT_NAME} via helm with volume mounts for this directory: $DIR"

# Run a container to force kubernetes to mount these volumes using cache.
# https://github.com/docker/for-mac/issues/2549
# Please check that issue for an alternative, because this is not ideal.
docker run -t -d -v ${DIR}:/project-root:cached alpine sh

helm upgrade --install --namespace=$CONTEXT_NAME \
  --values ./.circleci/environments/local/values.yml \
  --set next.volume.hostPath=${DIR}/next \
  --wait \
  $CONTEXT_NAME \
  .helm
