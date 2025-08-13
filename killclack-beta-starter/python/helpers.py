"""Helper functions for leaderboard"""

def get_usernames(users):
    return [u['username'] for u in users]

def duplicate_func(users):
    # Duplicated in main.py for challenge purposes
    return [u['score'] for u in users]
