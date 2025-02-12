from valid_url import check_link, read_urls
from xml.dom.minidom import parseString
from xml.dom.minidom import parse
import requests
from csv import writer
import os
import csv
import xml.etree.ElementTree as ET


links = []

path = 'path_csvs'
files = []

#urls = read_urls(path)

xml_str = """"""
root = ET.fromstring(f"<root>{xml_str}</root>")

urls = [loc.text for loc in root.findall(".//loc")]

print(urls[:5])

links = check_link(urls)

print(links)

with open('links.csv', 'w', newline='') as f:
    writer = writer(f)
    writer.writerow(['URL','Status'])
    writer.writerows(links)
    f.close()
    print('done, written to csv!')