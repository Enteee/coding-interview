#!/usr/bin/env python3
# TODO: Fix, document and maybe refactor this so that this runs in python 3.

def get_next_random():
    return '.'.join(
        str(randint(1,255)) for i in xrange(4)
    )

print(get_next_random())
