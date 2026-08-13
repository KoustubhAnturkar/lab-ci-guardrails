#!/usr/bin/env bash

set -uo pipefail

status=0
for path in "$@"; do
  if [[ -f "$path" ]] && grep --line-number --with-filename --extended-regexp '[[:blank:]]+$' -- "$path"; then
    status=1
  fi
done

exit "$status"
