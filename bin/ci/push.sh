#!/bin/bash
# This setup works with Tavis-CI.
# You need to specify $DOCKER_HUB_ACCOUNT, $DOCKER_USERNAME and $DOCKER_PASSWORD before using this script.

echo "Logging in into Docker Hub";
docker login -u=$DOCKER_USERNAME -p=$DOCKER_PASSWORD;

echo "Setting Gih user/password";
git config --global user.email "travis@travis-ci.com";
git config --global user.name "Travis-CI";
git config --global push.default upstream;

REPO_URL="https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git";
git remote add upstream $REPO_URL

if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

  echo "Version. Commiting version increment.";
  git add package.json;
  git commit -m "Increment version [ci skip]";

  if [ "$TRAVIS_BRANCH" == "$RELEASE_BRANCH" ]; then
    ./bin/release.sh -a $DOCKER_HUB_ACCOUNT -t $TRAVIS_BRANCH -l;
  fi;

  if [[ "$MAIN_BRANCHES" =~ "$TRAVIS_BRANCH" ]]; then
    echo "Done. Commiting changes back to repo.";
    git push upstream HEAD:$TRAVIS_BRANCH > /dev/null 2>&1;
    git push upstream HEAD:$TRAVIS_BRANCH --tags > /dev/null 2>&1;
  fi;
fi;
