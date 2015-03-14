# Generate the projects.json file.
from bs4 import BeautifulSoup
import json
import requests

linkedin = 'https://www.linkedin.com/in/danielsamuels'

response = requests.get(linkedin, headers={
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
})

# print response.text

projects = BeautifulSoup(response.text).select('#background-projects div.section-item')

project_list = []
for project in projects:
    project_link = project.select('a[name=project-site]')[0]['href']
    url = BeautifulSoup(requests.get(project_link).content).find('a', {
        'id': 'manual_redirect_link'
    })['href']

    project_list.append({
        'name': project.select('h4 a span[dir=auto]')[0].string.strip(),
        'url': url
    })

project_list = sorted(project_list, key=lambda x: x['name'])

with open('projects.json', 'w') as f:
    f.write(json.dumps(project_list))
