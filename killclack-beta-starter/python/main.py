# Main script for leaderboard stats
from helpers import get_usernames, duplicate_func

user_data = [
    {'id': 1, 'username': 'alice', 'score': 85},
    {'id': 2, 'username': 'bob', 'score': 92},
    {'id': 3, 'username': 'carol', 'score': 78},
]

def getData(users):
    # TODO: Rename to snake_case for consistency
    return [u['username'] for u in users]

def calc_average(users):
    """Calculate average score (missing in helpers)"""
    total = 0
    for u in users:
        total += u['score']
    return total / len(users)

# TODO: Add main guard, script runs automatically
print('Usernames:', get_usernames(user_data))
print('Average:', calc_average(user_data))

# EEGG Easter egg for you to find!
# 436f6e67726174732c20796f7520666f756e642074686520456173746572206567672120444d207573206f6e20446973636f7264206f722073656e6420656d61696c20746f207065746572406b696c6c636c61636b2e64657620746f20636c61696d20796f7572207072697a652e

# Duplicated function from helpers.py
# TODO: Remove this duplicate

def duplicate_func(users):
    # This function is also in helpers.py
    return [u['score'] for u in users]