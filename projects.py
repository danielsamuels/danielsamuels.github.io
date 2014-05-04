# Generate the projects.json file.
from bs4 import BeautifulSoup
import json
import requests

linkedin = 'https://www.linkedin.com/in/danielsamuels'

response = requests.get(linkedin)

projects = BeautifulSoup(response.text).find_all('li', class_='project')

project_list = []
for project in projects:
    project_link = project.h3.a['href']
    url = BeautifulSoup(requests.get(project_link).content).find('a', {
        'id': 'manual_redirect_link'
    })['href']

    project_list.append({
        'name': project.h3.a.string.strip(),
        'url': url
    })

with open('projects.json', 'w') as f:
    f.write(json.dumps(project_list))
