#!/bin/bash

USERNAME="maxlimgj"
ACCESS_TOKEN="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"
REPO_OWNER="maxlimgj"
REPO_NAME="self_hosted"
BRANCH_NAME="main"
COMMIT_MESSAGE="Update"

if [[ $1 == "commit" ]]; then
  # Add all changes to the staging area
  git add .

  # Commit changes
  git commit -m "$COMMIT_MESSAGE"

  # Push changes to the remote repository
  git push https://$USERNAME:$ACCESS_TOKEN@github.com/$REPO_OWNER/$REPO_NAME.git $BRANCH_NAME
else
  # Fetch the latest changes from the remote repository
  git fetch https://$USERNAME:$ACCESS_TOKEN@github.com/$REPO_OWNER/$REPO_NAME.git $BRANCH_NAME

  # Pull the latest changes from the remote repository
  git pull https://$USERNAME:$ACCESS_TOKEN@github.com/$REPO_OWNER/$REPO_NAME.git $BRANCH_NAME
fi

