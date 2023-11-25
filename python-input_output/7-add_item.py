#!/usr/bin/python3
"""Are you documented ?"""


import sys
import json
from os.path import exists
from save_to_json_file import save_to_json_file
from load_from_json_file import load_from_json_file

def add_and_save_to_json(arguments):
    # Check if the file exists, if not, create it
    file_path = 'add_item.json'

    if exists(file_path):
        # Load existing data from the file
        data = load_from_json_file(file_path)
    else:
        # If the file doesn't exist, create an empty list
        data = []

    # Add new arguments to the list
    data.extend(arguments)

    # Save the updated list to the file
    save_to_json_file(data, file_path)

if __name__ == "__main__":
    # Exclude the script name (sys.argv[0]) and use the rest as arguments
    arguments = sys.argv[1:]
    
    # Add the arguments to the list and save to JSON file
    add_and_save_to_json(arguments)

