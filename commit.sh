#!/bin/bash
msg=$1
ghrepo=""
hrrepo=""

do_ghrepo(){
  printf "GitHub being processed\n"
  git add --all
  git commit -m "$msg"
  git push
}


while [[ ! "$msg" ]];do
  echo "Please provide a commit message"
  read msg
done

do_ghrepo

printf "Commit script completed."