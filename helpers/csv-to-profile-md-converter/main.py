import csv

with open('Asteria Profile Form.csv', 'r') as responsesFile:
    responses = [row for row in csv.reader(responsesFile)]

def unpack(raw: list[str]) -> dict:
    data = {
        'First name':' '.join((raw[2].split(' '))[:-1]),
        'Surname': (raw[2].split(' '))[-1],
        'Pronouns':raw[3].upper(),
        'Roles':str(raw[4].split(';')).replace('\'', '"'),
        'School':raw[5],
        'About':'\n'.join(raw[6].split('\\n')),
        'Subjects':'\n- '.join(raw[7].split(';'))
    }

    return data

for entry in responses[1:]:
    data = unpack(entry)

    output = f'''---
type: "Profile"
first_name: "{data['First name']}"
surname: "{data['Surname']}"
school: "{data['School']}"
pronouns: "{data['Pronouns']}"
role: {data['Roles']}
userID: ""
slug: "/profiles/"
profile_picture: "blank.png"
---

{data['About']}

## A-Level Subjects

- {data['Subjects']}
    '''

    with open(f'{data["First name"]} {data["Surname"]}.md', 'w') as outputFile: outputFile.write(output)
