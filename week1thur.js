// var vs let vs const
// Block scoped and can be reassigned
let name;
name = 'Paul';
console.log(name);
name = 'Jon';
console.log(name);

// const can not be reassigned
// var is function scoped and declaration loads up before the file is read
// let must be declared first before being called; else error occurs

//console.log(y)
//let y - 15 error!

//Git
//Version control system designed to keep chronological timeline of all 
//of your code changes.
//to traverse file system in terminal:
// cd name_of_folder --> moves you down
// cd .. --> moves you up
// ls --> lists items inside existing folder
// pwd --> specifies directory path you are currently in

// to initiate a git repository
// git init
// staging files for a commit
// git status tells you the status of your repository
// git add <file_name> OR git add . to add all of the files inside the
// folder that you are in and stage them for a commit
// to commit your changes, run the following command:
// git commit -m "your commit message here"

// to view the commitL
// git log
// show us comment hash, branch name, commit message and other metadata

// go to Github.com and create repository 
// Name our repository, make sure to leave it public andkeep all other
// options deselected
// click create repository 
// copy the HTTPS url provided (one that ends with .git)
// go bACK to VSCode
//Link your local repository with remote repository by typing:
// git remote add origin <paste the link>
// to push to remote repository
// git push origin master

// git config --global user.email "First Last"
// git config --global user.email "email@email.com"
// git log
