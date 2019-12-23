from random import randint

def get_random_ipv4() -> str:
    """Returns a random IPv4 address string."""
    return ".".join(str(randint(0, 255)) for i in range(4))

if __name__ == "__main__":
    print(get_random_ipv4())
