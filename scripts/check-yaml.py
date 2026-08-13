#!/usr/bin/env python3
"""Validate each YAML file supplied by pre-commit."""

from pathlib import Path
import sys

import yaml


def main(paths: list[str]) -> int:
    failed = False
    for filename in paths:
        path = Path(filename)
        try:
            list(yaml.safe_load_all(path.read_text(encoding="utf-8")))
        except (OSError, UnicodeError, yaml.YAMLError) as error:
            print(f"{path}: invalid YAML: {error}", file=sys.stderr)
            failed = True
    return int(failed)


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
