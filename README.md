# Commit and Pull Script

This repository contains a script that simplifies the process of committing changes to GitHub and pulling/fetching the latest changes from the remote repository. The script allows you to perform these operations with ease using simple commands.

## Prerequisites

Before using the script, ensure that you have the following prerequisites:

1. Git installed on your local machine. If Git is not already installed, you can download and install it from the official website: [https://git-scm.com](https://git-scm.com)

## Usage

Follow the steps below to use the script:

1. Clone the repository: Start by cloning this repository to your local machine. Open your terminal or command prompt and run the following command:

   ```bash
   git clone https://github.com/GoodJeans/hosting.git
   ```
2. Navigate to the repository directory: Change to the repository directory by running the following command:
   ```bash
   cd self_hosted
   ```
3. Make the script executable: Ensure that the script has execution permissions. Run the following command:
   ```bash
   chmod +x update.sh
   Commit and push changes:
   ```
4. To commit and push changes to GitHub, execute the following command:
   ```bash
   ./update.sh commit
   ```
   This command will add all changes in the current directory to the staging area, create a commit with the default message "Update," and push the changes to the remote repository.

   If you want to use a custom commit message, you can modify the COMMIT_MESSAGE variable in the update script before running the commit command.

5. Pull and fetch changes:

   To fetch the latest changes from the remote repository, execute the following command:
   ```bash
   update.sh
   ```
