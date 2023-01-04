# Outside the Obvious website

create-react-app and a small gallery. Simple, really.

## Renaming the photos

Just run this command:

`ls -v | cat -n | while read n f; do mv -n "$f" "$n.jpg"; done`
